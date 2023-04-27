import axios from "axios";

const ax = axios.create({
    baseURL:
        process.env.NODE_ENV == "production"
            ? "https://leto.andreasnicklaus.de/api/"
            : "http://localhost:8080/",
});

export default ax;