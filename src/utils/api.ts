import axios from "axios";

const api = axios.create({
  baseURL: "http://task-management-backend.us-east-2.elasticbeanstalk.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
