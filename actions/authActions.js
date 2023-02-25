import axios from "axios";

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
