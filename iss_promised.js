/* Require */
const request = require(`request-promise-native`);

/* Tcp:Http */
const urlIp = `https://api64.ipify.org/?format=json`;
const urlGps = `http://ipwho.is/`;


/* Arguments */
/* Export Functions */
const fetchMyIp = () => {
  return request(urlIp);
};
const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`${urlGps}${ip}`);
};

/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = { fetchMyIp, fetchCoordsByIP };