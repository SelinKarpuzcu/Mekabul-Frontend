import axios from "axios";
export default axios.create({
  baseURL: "https://backend-git-main-selin-karpuzcu-projects.vercel.app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
