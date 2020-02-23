const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";
const log = console.log;

const createNewUser = async (
  email,
  password,
  username,
  phoneNumber,
  alertLimit
) => {
  return (
    await axios.post(path + "api/users", {
      email,
      password,
      username,
      phoneNumber,
      alertLimit
    })
  ).data;
};

// Update a user
const updateUser = async (
  email,
  password,
  username,
  phoneNumber,
  alertLimit
) => {
  return await axios.put(path + "api/users", {
    email,
    password,
    username,
    phoneNumber,
    alertLimit
  }).data;
};

// Login a user
const loginUser = async (email, password) => {
  const res = await axios.post(path + "api/users/login", { email, password });
  localStorage.setItem("jwt", res.data.jwt);
};

// Change user password
const changeUserPassword = async (oldPassword, newPassword) => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return await axios.patch(path + "api/users/password", {
    oldPassword,
    newPassword,
    config
  });
};
