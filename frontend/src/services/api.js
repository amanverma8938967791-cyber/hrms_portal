import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-portal-jwye.onrender.com/api/",
});

export default API;
