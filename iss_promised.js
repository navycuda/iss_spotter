/* Require */
const request = require(`request-promise-native`);

/* Tcp:Http */
const urlIp = `https://api64.ipify.org/?format=json`;
const urlGps = `http://ipwho.is/`;
const urlIss = `https://iss-pass.herokuapp.com/json/`;

/* Arguments */
/* Export Functions */
const fetchMyIp = () => {
  return request(urlIp);
};
const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`${urlGps}${ip}`);
};
const fetchISSFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body);
  return request(`${urlIss}?lat=${latitude}&lon=${longitude}`);
};
const nextIssTimesForMyLocation = () => {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = { nextIssTimesForMyLocation };