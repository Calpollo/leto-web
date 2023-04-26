import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/funktionen",
        name: 'Funktionen',
        component: () => import("@/views/Funktionen.vue")
    },
    {
        path: "/preise",
        name: 'Preise',
        component: () => import("@/views/Preise.vue")
    },
    {
        path: "/login",
        name: 'Login',
        component: () => import("@/views/Login.vue")
    },
    {
        path: "/register",
        name: 'Register',
        component: () => import("@/views/Register.vue")
    },
    {
        path: "/account",
        name: 'Account',
        component: () => import("@/views/Account.vue")
    },
    {
        path: "/checkout",
        name: 'Checkout',
        component: () => import("@/views/Checkout.vue")
    },
];

const router = new VueRouter({
    mode: "history",
    //   base: process.env.BASE_URL,
    routes,
});

export default router;
