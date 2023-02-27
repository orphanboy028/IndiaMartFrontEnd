import axios from "axios";

export const createMainCategroies = async (data, token) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/api/v1/indiaMart/category",

      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};

export const getCategeoies = async (token) => {
  try {
    return await axios.get("http://127.0.0.1:5000/api/v1/indiaMart/category", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};

export const getSubeCategeoies = async (token) => {
  try {
    return await axios.get("http://127.0.0.1:5000/api/v1/indiaMart/category", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};
