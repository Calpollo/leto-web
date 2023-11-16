import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    //   base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    const isPrivate = to.meta.private;
    const isAdmin = to.meta.admin;

    if (!isPrivate) next();
    else if (isAdmin) {
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
