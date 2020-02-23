const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";
const log = console.log;

// Get Events' History
const getEvents = async amount => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return axios.get(path + "api/events", config);
};

// Get all Events' History By ID
const getEventsByID = async () => {
  let token = localStorage.getItem("jwt");
  return axios.get(path + `api/events/${toekn}`);
};
