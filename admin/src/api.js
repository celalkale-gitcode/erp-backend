import axios from "axios";

const API = axios.create({
  baseURL: "https://senin-api.onrender.com"
});

export default API;
