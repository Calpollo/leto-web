import axios from "axios";

const ax = axios.create({
    baseURL:
        process.env.NODE_ENV == "production"
            ? "/api/"
            : "http://localhost:8080/",
});

const sessionAuthToken = sessionStorage.getItem("authToken")
if (sessionAuthToken) ax.defaults.headers.common.Authorization =
    "Bearer " + sessionAuthToken;

export default ax;