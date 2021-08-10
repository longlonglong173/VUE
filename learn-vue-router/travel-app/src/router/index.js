import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DestinationDetails from "../views/DestinationDetails.vue"
import store from "@/store.js"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        alias: ['/home', '/homepage', '/home-page'],
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: "/destination/:slug",
        name: "DestinationDetails",
        component: DestinationDetails,
        props: true,
        children: [
            {
                path: ":experienceSlug",
                name: "experienceDetails",
                props: true,
                component: () => import("../views/ExperienceDetails")
            }
        ],
        beforeEnter: (to, from, next) => {
            const exists = store.destinations.find(
                destination =>destination.slug === to.params.slug
            )
            if (exists) {
                next()
            }
            else {
                next({name: "notFound"})
            }
        }
    },
    {
        path: "/404",
        alias: "*",
        name: "notFound",
        component: () => import(/* webpackChunkName: "NotFound*/ "../views/NotFound")
    },

];

const router = new VueRouter({
    routes,
    mode: 'history',
    
});

export default router;
