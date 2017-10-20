import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePreventBack from 'vue-prevent-back'

import App from './App.vue'
import routes from './routes';

Vue.use(VueRouter)
Vue.use(VuePreventBack)

const router = new VueRouter({
    mode: 'hash',
    routes: routes,
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
