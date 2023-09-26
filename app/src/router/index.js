import store from "@/store";
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
        path: "/download",
        name: 'Download',
        component: () => import("@/views/Download.vue")
    },
    {
        path: "/kundeninformationen",
        name: 'Kundeninformationen',
        component: () => import("@/views/KundenInformationen.vue")
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
        path: "/admin-dashboard",
        name: 'AdminDashboard',
        component: () => import("@/views/AdminDashboard.vue")
    },
    {
        path: "/checkout",
        name: 'Checkout',
        component: () => import("@/views/Checkout.vue")
    },
    {
        path: "/stripe-success",
        redirect: (to) => {
            return {
                path: "/account", query: {
                    toast: JSON.stringify({
                        msg: "Stripe Checkout war erfolgreich",
                        variant: "success",
                        title: "Zahlung erfolgreich"
                    }),
                    ...to.query
                }
            }
        }
    },
    {
        path: "/stripe-cancel",
        redirect: (to) => {
            return {
                path: "/account", query: {
                    toast: JSON.stringify({
                        msg: "Stripe Checkout war nicht erfolgreich",
                        variant: "danger",
                        title: "Zahlung abgebrochen"
                    }),
                    ...to.query
                }
            }
        }
    }
];

const router = new VueRouter({
    mode: "history",
    //   base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    const publicPathNames = ["Home", "Login", "Register", "Preise", "Funktionen", "Download", "Kundeninformationen", "Checkout"];
    const adminPathNames = ["AdminDashboard"];
    if (publicPathNames.includes(to.name)) next();
    else if (adminPathNames.includes(to.name)) {
        if (store.state.loggedIn && store.state.me?.RoleName == "Admin") next();
        else next({
            name: "Login", query: {
                toast: JSON.stringify({
                    msg: "Du musst ein Administrator sein, um auf diese Ressource zuzugreifen",
                    variant: "danger",
                    title: "Zugriff verweigert"
                }),
                redirectUrl: to.path,
                ...to.query
            }
        });
    }
    else if (!store.state.loggedIn) next({
        name: "Login", query: {
            redirectUrl: to.path,
            ...to.query
        }
    });
    else next();
});

export default router;
