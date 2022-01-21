require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import BaseLayout from "./components/base/BaseLayout.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    mode:'history',
    base: 'laravel-mix/',
    routes : routes
});

Vue.component('base-layout',BaseLayout);
const $vm = new Vue({
    router
}).$mount('#app');
