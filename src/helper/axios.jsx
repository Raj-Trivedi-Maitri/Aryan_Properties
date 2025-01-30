import axios from "axios";

// Set the baseURL dynamically using an environment variable or a default value
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Use environment variable if available
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});

export default api;
