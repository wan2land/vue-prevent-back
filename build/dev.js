import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePreventBack from '../src/index.js'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VuePreventBack)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', component: require('./Form.vue').default, },  
        { path: '/other', component: require('./Other.vue').default, },  
    ],
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
