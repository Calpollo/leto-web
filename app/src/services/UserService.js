import store from "@/store";
import ax from "./RequestService";

export default {
    signup(username, email, password) {
        return ax
            .post("/auth/", { username, email, password })
            .then((response) => {
                ax.defaults.headers.common.Authorization =
                    "Bearer " + response.data.token;
                store.commit("logIn");
                return true;
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
                store.commit("logIn");
                return true;
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    },
    logout() {
        ax.defaults.headers.common.Authorization = null;
        store.commit("logOut")
    },
    me() {
        return ax.get("/auth/me").then((response) => {
            return response.data;
        });
    },
    downgrade() {
        return ax.post("/auth/down").then(response => {
            store.commit("updateMe")
            return response.data
        })
    }
}