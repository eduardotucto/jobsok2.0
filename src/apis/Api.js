import axios from "axios";


const Api = axios.create({
  baseURL: "http://api.jobsok.test/api",
});

export default Api;
