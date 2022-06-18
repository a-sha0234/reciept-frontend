import axios from "axios";

const instance = axios.create({
  // base url for server
  baseURL: "http://localhost:3000/",
});

export default instance;
