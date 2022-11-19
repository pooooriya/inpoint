import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        timeout: 20000,
    },
});

export default AXIOS;