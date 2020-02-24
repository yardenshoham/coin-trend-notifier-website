const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";

// Checks the server's availablity
export const check_servers_availablity = async () => {
  return await axios.get(path).data;
};
