
import {createDirective} from './directive';

export function install(Vue, options) {
    options = options || {};
    if (!Vue.prototype.$isServer) {
        Vue.directive(options.name || "prevent-back", createDirective(options));
    } else {
        Vue.directive(options.name || "prevent-back", {});
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
};
