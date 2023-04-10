import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";


const API_URL = "http://localhost:8088/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    const user = AuthService.getCurrentUser();
  return axios.get(API_URL + "user" + "/" + user.accNumber, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;