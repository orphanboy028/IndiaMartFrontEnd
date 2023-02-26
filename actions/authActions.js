import axios from "axios";
import Cookies from "js-cookie";

export const singUpAdminAccount = async (data) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/api/v1/indiaMart/admin/admin-signup",

      data
    );
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};

export const logInAdminAccount = async (data) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/api/v1/indiaMart/admin/admin-login",

      data
    );
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};

// Logout user
export const logOut = (next) => {
  removeCookies("token");
  localStorage.removeItem("user");

  next();
};

// set Cookies
export const setCookies = (key, value) => {
  console.log(key, value);
  Cookies.set(key, value, { expires: 1 });
};

// Get Cookies

export const getCookies = (key) => {
  return Cookies.get("token");
};

export const removeCookies = (kay) => {
  Cookies.remove(kay);
};

// set token in LocalStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const authenticate = (data, cb) => {
  const { token } = data.data;
  const { user } = data.data;
  console.log(token, user);

  setLocalStorage("user", user);
  setCookies("token", token);

  cb();
};

export const isAuth = () => {
  if (process.browser) {
    const cookichecked = getCookies("token");
    if (cookichecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
