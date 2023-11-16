import router from "@/router";
import store from "@/store";
import axios from "axios";

const ax = axios.create({
    baseURL:
        process.env.NODE_ENV == "production"
            ? "/api/"
            : "http://localhost:8080/api/",
    // "https://leto.andreasnicklaus.de/api/"
});

ax.interceptors.response.use(
    (response) => response,
    (error) => {
        switch (error.response.status) {
            case 401:
                store.dispatch("logOut");
                break;
            case 403:
                store.dispatch("logOut").then(() => {
                    router.push({ name: "Login" })
                });
                break;
            default:
                console.warn(error);
        }
        return Promise.reject(error);
    }
);

const sessionAuthToken = sessionStorage.getItem("authToken")
if (sessionAuthToken) ax.defaults.headers.common.Authorization =
    "Bearer " + sessionAuthToken;

export default ax;