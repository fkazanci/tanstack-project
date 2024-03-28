import axios from "axios";

export const getUsers = async () => {
  let data = [];
  await axios.get("https://reqres.in/api/users").then((res) => {
    data = res.data.data;
  });
  return data;
};

export const createUser = async (user) => {
  let data = [];
  await axios.post("https://reqres.in/api/users", user).then((res) => {
    data = res.data;
  });
  return data;
};
