import UserService from "@/services/UserService";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedIn: false,
        me: null,
    },
    getters: {},
    mutations: {
        logIn: (state) => {
            state.loggedIn = true
            UserService.me().then(me => state.me = me)
        },
        logOut: (state) => {
            state.loggedIn = false
            state.me = null
        },
    },
    actions: {},
    modules: {},
});
