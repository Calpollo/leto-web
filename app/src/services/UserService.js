import store from "@/store";
import axios from "axios";

const ax = axios.create({
    baseURL:
        process.env.NODE_ENV == "production"
            ? "https://leto.andreasnicklaus.de/api/auth/"
            : "http://localhost:8080/auth/",
});

export default {
    signup(username, email, password) {
        return ax
            .post("/", { username, email, password })
            .then((response) => {
                console.log({ response })
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
            .post("/login", { username, password })
            .then((response) => {
                console.log({ response })
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
    me() {
        return ax.get("/me").then((response) => {
            return response.data;
        });
    }
}