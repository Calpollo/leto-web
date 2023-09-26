import store from "@/store";
import ax from "./RequestService";

export default {
    signup(username, email, password) {
        return ax
            .post("/auth/", { username, email, password })
            .then((response) => {
                ax.defaults.headers.common.Authorization =
                    "Bearer " + response.data.token;
                sessionStorage.setItem("authToken", response.data.token)
                return store.dispatch("logIn").then(() => true);
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    },
    login(username, password) {
        return ax
            .post("/auth/login", { username, password })
            .then((response) => {
                ax.defaults.headers.common.Authorization =
                    "Bearer " + response.data.token;
                sessionStorage.setItem("authToken", response.data.token)
                return store.dispatch("logIn").then(() => true);
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    },
    logout() {
        ax.defaults.headers.common.Authorization = null;
        sessionStorage.removeItem("authToken")
        this.$bvToast.toast("Du wurdest ausgeloggt", {
            title: "Logout",
            autoHideDelay: 5000,
            variant: "danger",
            solid: true,
        });
        store.commit("logOut")
    },
    me() {
        return ax.get("/auth/me").then((response) => {
            return response.data;
        });
    },
    upgrade(id) {
        return ax.post("/auth/up/" + id).then(response => {
            return response.data
        })
    },
    downgrade(id = null) {
        if (id) return ax.post("/auth/down/" + id).then(response => {
            return response.data
        })
        return ax.post("/auth/down").then(response => {
            store.dispatch("updateMe")
            return response.data
        })
    },
    changePassword(password, id = null) {
        if (id) return ax.put("/auth/password/" + id, { password }).then(response => {
            return response.data
        })
        return ax.put("/auth/password", { password }).then(response => {
            // store.dispatch("updateMe")
            return response.data
        })
    },
    getAll() {
        return ax.get("/auth/").then(response => response.data)
    },
    deleteMe() {
        const deletionRequest = ax.delete("/auth/").then(response => response.data)
        this.logout();
        return deletionRequest
    },
    deleteUser(id) {
        return ax.delete("/auth/" + id).then(response => response.data)
    }
}