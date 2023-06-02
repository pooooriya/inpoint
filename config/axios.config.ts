import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://teststream.inpointconnect.ir/",
  headers: {
    timeout: 20000,
  },
});

export default AXIOS;
