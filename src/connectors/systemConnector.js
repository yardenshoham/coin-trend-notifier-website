const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";
const log = console.log;

// Checks the server's availablity
const check_servers_availablity = async () => {
  return await axios.get(path).data;
};
