const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";

// Get Events' History
export const getEvents = amount => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return axios.get(path + "api/events", config);
};

// Get all Events' History By ID
export const getEventsByID = () => {
  let token = localStorage.getItem("jwt");
  return axios.get(path + `api/events/${token}`);
};
