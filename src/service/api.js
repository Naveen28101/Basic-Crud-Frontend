import axios from "axios";

const URL = "https://basiccrudbackend.onrender.com";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    // console.log("error while loading the api", error);
    return error;
  }
};

export const getAllusers = async () => {
  try {
    return await axios.get(`${URL}/getallusers`);
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/user/${id}`);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateUser = async (id, user) => {
  try {
    return await axios.put(`${URL}/update/${id}`, user);
  } catch (error) {
    console.log(error);
    return error;
  }
};
