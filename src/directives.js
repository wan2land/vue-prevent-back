
function createUnloadHandler(trigger, message) {
    return function leaving(e) {
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
        }
    }
}

function getInputElements(el) {
    return [].concat(
        [].slice.call(el.getElementsByTagName('input')),
        [].slice.call(el.getElementsByTagName('select')),
        [].slice.call(el.getElementsByTagName('textarea'))
    )
}

export default {
    bind(el, binding, vnode) {
        var {
            value: message = 'You have unsaved work. Are you sure you want to leave this page?',
            modifiers: {
                "vue-router-disable": vueRouterDisabled,
                "beforeunload-disable": beforeunloadDisabled,
            },
        } = binding;
        var isModified = false;
        var trigger = () => isModified;
        var inputs = getInputElements(el);
        

        function changeHandle() {
            isModified = true;
        }
        inputs.forEach(input => input.addEventListener('input', changeHandle));

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
            inputs.forEach(input => input.removeEventListener('input', changeHandle));

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
