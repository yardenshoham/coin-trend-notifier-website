const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/api/preferences";

// Set User Preference
export const setPreference = async (
  probability,
  baseAssetName,
  quoteAssetName
) => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return await axios.post(
    path,
    {
      probability,
      baseAssetName,
      quoteAssetName
    },
    config
  );
};

// Delete User Preference
export const deletePreference = async PreferenceDto => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return await axios.delete(
    path +
      "?baseAssetName=" +
      PreferenceDto.baseAssetName +
      "&quoteAssetName=" +
      PreferenceDto.quoteAssetName,
    config
  );
};

// Get User Preference
export const getPreferences = async () => {
  let token = localStorage.getItem("jwt");
  let config = { headers: { Authorization: `Bearer ${token}` } };
  return await axios.get(path, config);
};
