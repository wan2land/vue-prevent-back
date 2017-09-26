
function isString(value) {
    const type = typeof value
    return type == 'string' || (type == 'object' && value instanceof String)
}

function createUnloadHandler(trigger, message) {
    return function leaving(e) {
        e = e || window.event;
        if (trigger()) {
            var confirmationMessage = message;
            e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
            return confirmationMessage; // Gecko, WebKit, Chrome <34
        }
    }
}

function createRouteLeaveHandler(trigger, message) {
    return function beforeRouteLeave(to, from, next) {
        if (!trigger() || trigger() && confirm(message)) {
            next();
        } else {
            next(false);
        }
    }
}

export function createDirective(options) {
    var defaultMessage = options.message || 'You have unsaved work. Are you sure you want to leave this page?';
    return  {
        bind(el, {value, modifiers}, vnode) {
            var vueRouterDisabled = modifiers['vue-router-disable'];
            var beforeunloadDisabled = modifiers['beforeunload-disable'];
            var testerOnlyEnabled = modifiers['tester-only'];
    
            var message = defaultMessage;
            var tester = () => true; // default tester always return true :-)
    
            if (isString(value)) {
                message = value;
            } else {
                value = value || {};
                if (value.message) {
                    message = value.message;
                }
                if (value.tester) {
                    tester = value.tester;
                }
            }
    
            var isModified = false;
            var trigger = () => (isModified || !tester());
            var inputs = [];
            
            function changeHandle() {
                isModified = true;
            }
    
            if (!testerOnlyEnabled) {
                el.addEventListener('input', changeHandle);
            }
    
            // for refresh, location.href
            if (!beforeunloadDisabled) {
                var unloadHandler = createUnloadHandler(trigger, message);
                window.addEventListener('beforeunload', unloadHandler);    
            }
    
            // for vue router
            if (!vueRouterDisabled) {
                var routeLeaveHandler = createRouteLeaveHandler(trigger, message);
                if (!vnode.context.$options['beforeRouteLeave']) {
                    vnode.context.$options.__proto__['beforeRouteLeave'] = []; // using __proto__
                }
                vnode.context.$options['beforeRouteLeave'].push(routeLeaveHandler);
            }
    
            // unbind method
            vnode._vuePreventBackUnbind = function () {
                if (!testerOnlyEnabled) {
                    el.removeEventListener('input', changeHandle);
                }
    
                // for refresh, location.href
                if (!beforeunloadDisabled) {
                    window.removeEventListener('beforeunload', unloadHandler);                
                }
    
                // for vue router
                if (!vueRouterDisabled) {
                    vnode.context.$options['beforeRouteLeave'].splice(
                        vnode.context.$options['beforeRouteLeave'].indexOf(routeLeaveHandler), 1
                    );
                    if (vnode.context.$options['beforeRouteLeave'].length === 0) {
                        delete vnode.context.$options['beforeRouteLeave'];
                    }
                }
            };
        },
        unbind(el, binding, vnode) {
            vnode._vuePreventBackUnbind();
            delete vnode._vuePreventBackUnbind;
        },
    };
}
