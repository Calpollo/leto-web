import UserService from "@/services/UserService";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedIn: sessionStorage.getItem("authToken") != null,
        me: null,
    },
    getters: {},
    mutations: {
        logIn: (state) => {
            state.loggedIn = true
        },
        logOut: (state) => {
            state.loggedIn = false
            state.me = null
        },
        setMe(state, me) {
            state.me = me
        },
    },
    actions: {
        logOut: (state) => {
            state.commit("logOut")
            sessionStorage.removeItem("authToken")
            return
        },
        logIn(state) {
            state.commit("logIn")
            return state.dispatch("updateMe")
        },
        updateMe(state) {
            return UserService.me().then(me => state.commit("setMe", me))
        }
    },
    modules: {},
});
