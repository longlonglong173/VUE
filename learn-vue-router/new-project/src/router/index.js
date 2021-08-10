import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DestinationDetail from '../views/DestinationDetail.vue';
import Warnning from '../views/Warnning.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        component: Warnning,
    },
    {
        path: '/',
        alias: ['/home', '/homepage', '/home-page'],
        name: 'Home',
        component: Home,
    },

    {
        path: '/details/:id',
        name: 'DestinationDetail',
        component: DestinationDetail,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
