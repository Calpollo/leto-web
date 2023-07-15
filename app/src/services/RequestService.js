import axios from "axios";

const ax = axios.create({
    baseURL:
        process.env.NODE_ENV == "production"
            ? "/api/"
            : "http://localhost:8080/api/",
    // "https://leto.andreasnicklaus.de/api/"
});

const sessionAuthToken = sessionStorage.getItem("authToken")
if (sessionAuthToken) ax.defaults.headers.common.Authorization =
    "Bearer " + sessionAuthToken;

export default ax;