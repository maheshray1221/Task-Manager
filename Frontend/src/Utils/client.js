import axios from "axios";
export const client = axios.create({
  baseURL: "https://task-manager-backend-8iwi.onrender.com/api/v1/user",
});
