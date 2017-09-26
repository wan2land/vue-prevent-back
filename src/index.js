
export function install(Vue, options) {
    var directives = {};
    options = options || {};
    if (!Vue.prototype.$isServer) {
        directives = require('./directives').default;
    }
    Vue.directive(options.name || "prevent-back", directives);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
};
