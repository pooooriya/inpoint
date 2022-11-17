import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'http://worker-1.moloodian.ir:3000',
    headers: {
        timeout: 20000,
    },
});

export default AXIOS;