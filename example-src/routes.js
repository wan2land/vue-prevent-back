
export default [
    { path: '/', component: require('./index.vue').default, },

    { path: '/simple', component: require('./simple.vue').default, meta: {title: "Simple Example", }, },
    { path: '/custom-message', component: require('./custom-message.vue').default, meta: {title: "Custom Message Example", }, },
    { path: '/using-tester', component: require('./using-tester.vue').default, meta: {title: "Using Tester Example", }, },
    { path: '/using-tester-only', component: require('./using-tester-only.vue').default, meta: {title: "Using Tester Only Example", }, },
    { path: '/vue-router-disable', component: require('./vue-router-disable.vue').default, meta: {title: "vue-router-disable Modifier", }, },
    { path: '/beforeunload-disable', component: require('./beforeunload-disable.vue').default, meta: {title: "beforeunload-disable Modifier", }, },
];
