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
        console.error(error);
        switch (error.response.status) {
            case 401:
                store.commit("logOut");
                break;
            case 403:
                store.commit("logOut");
                break;
            default:
                throw error;
        }
    }
);

const sessionAuthToken = sessionStorage.getItem("authToken")
if (sessionAuthToken) ax.defaults.headers.common.Authorization =
    "Bearer " + sessionAuthToken;

export default ax;