const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";
const log = console.log;

// Set User Preference
const setPreference = async (probability, baseAssetName, quoteAssetName) => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return await axios.post(
    path + "api/prefernces",
    {
      probability,
      baseAssetName,
      quoteAssetName
    },
    config
  );
};

// Delete User Preference
const deletePreference = async PreferenceDto => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return await axios.delete(
    path + "api/prefernces",
    {
      PreferenceDto
    },
    config
  );
};

// Get User Preference
const getPreference = async () => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return await axios.get(path + "api/prefernces", config);
};
