/* Require */
const request = require(`request-promise-native`);

/* Tcp:Http */
const urlIp = `https://api64.ipify.org/?format=json`;

/* Arguments */
/* Export Functions */
const fetchMyIp = () => {
  return request(urlIp);
};

/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = { fetchMyIp  };