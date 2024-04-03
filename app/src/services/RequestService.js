import axios from "axios";
import UserService from "./UserService";

const ax = axios.create({
    baseURL:
        process.env.NODE_ENV == "production"
            ? "https://api.leto.andreasnicklaus.de/api/"
            : "http://localhost:8080/api/",
    // "https://leto.andreasnicklaus.de/api/"
});

ax.interceptors.response.use(
    (response) => response,
    (error) => {
        switch (error.response.status) {
            case 401:
                UserService.logout()
                break;
            case 403:
                UserService.logout({ name: "Login" })
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