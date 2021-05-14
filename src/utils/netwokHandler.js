import axios from "axios";
const URL = "https://mentor-student-v2.herokuapp.com";

export const fetchAll = async () => {
  let { data } = await axios.get(`${URL}/fetch-all`);
  return data;
};

export const addStudent = async (form) => {
  let { data } = await axios.post(`${URL}/add-student`, form);
  return data;
};

export const addMentor = async (form) => {
  let { data } = await axios.post(`${URL}/add-mentor`, form);
  return data;
};

export const assignMentor = async (obj) => {
  let { data } = await axios.post(`${URL}/assign-mentor`, obj);
  return data;
};

export const changeMentor = async (obj) => {
  let { data } = await axios.post(`${URL}/change-mentor`, obj);
  return data;
};
