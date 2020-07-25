const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";

// Get Events' History
const getEvents = (amount) => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return axios.get(path + `api/events?amount=${amount}`, config);
};

// Get all Event History By ID
const getEventByID = (id) => {
  return axios.get(path + `api/events/${id}`);
};

// Get all Event History By ID
const getAllEvents = () => {
  return axios.get(path + `api/events/analysis`);
};

module.exports = {
  getEvents,
  getEventByID,
  getAllEvents,
};
