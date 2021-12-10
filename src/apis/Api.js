import axios from "axios";


const Api = axios.create({
  // baseURL: "http://api.jobsok.test/api",
  baseURL: "http://143.244.163.58/api",
});

export default Api;
