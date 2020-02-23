const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";
const log = console.log;

// Checks the server's availablity
const check_servers_availablity = async () => {
  try {
    log(await axios.get(path).data);
  } catch (err) {
    log(err);
  }
};

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
  const res = await axios.post(path + "users/login", { email, password });
  localStorage.setItem("jwt", res.data.jwt);
};

// Change user password
const changeUserPassword = async (oldPassword, newPassword) => {
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return await axios.patch(path + "users/password", {
    oldPassword,
    newPassword,
    config
  });
};
