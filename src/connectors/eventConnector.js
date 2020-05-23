const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";

// Get Events' History
export const getEvents = (amount) => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return axios.get(path + `api/events?amount=${amount}`, config);
};

// Get all Event History By ID
export const getEventByID = (id) => {
  return axios.get(path + `api/events/${id}`);
};
