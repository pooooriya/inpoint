import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'http://37.152.191.113:5000',
    headers: {
        timeout: 20000,
    },
});

export default AXIOS;