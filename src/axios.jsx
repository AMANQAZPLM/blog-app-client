import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://lamablog-lvpw.onrender.com/api/",
  //   baseURL: "http://localhost:8800/api/",
  withCredentials: true, // want to send access token to backend server
});
