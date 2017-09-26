
export default [
    { path: '/', component: require('./index.vue').default, },  

    { path: '/simple', component: require('./simple.vue').default, },  
    { path: '/custom-message', component: require('./custom-message.vue').default, },
    { path: '/using-tester', component: require('./using-tester.vue').default, },
    { path: '/using-tester-only', component: require('./using-tester-only.vue').default, },
    
    { path: '/vue-router-disable', component: require('./vue-router-disable.vue').default, },
    { path: '/beforeunload-disable', component: require('./beforeunload-disable.vue').default, },
];
