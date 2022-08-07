/* Require */
const request = require(`request`);

/* Tcp:Http */
const urlIp = `https://api64.ipify.org/?format=json`;
const urlGp = `http://ipwho.is/`;
const urlIss = `https://iss-pass.herokuapp.com/json/`;

/* Arguments */
/* Export Functions */
// Fetchs my ip address
const fetchMyIp = (callback) => {
  request(urlIp, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};
// fetches coordinates by ip
const fetchCoordsByIp = (ip, callback) => {
  request(urlGp + ip, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const jsonObject = JSON.parse(body);
    if (jsonObject.success) {
      callback(null, {
        latitude : jsonObject.latitude,
        longitude: jsonObject.longitude
      });
    } else {
      callback(`${ip} is not a valid ip4 address`, null);
    }
  }); // request
}; // fetchCoordsByIp
// fetch iss flyover times
const fetchISSFlyOverTimes = (coordinates, callback) => {
  // request(`${urlIss}?lat=coordinates.latitude&lon=coordinates.longitude`, (error, response, body) => {
  request(`${urlIss}?lat=${coordinates.latitude}&lon=${coordinates.longitude}`, (error, response, body) => {
    if (error) return callback(`Status Code / Error: ${response.statusCode} when fetching Iss pass times: ${body}`, null);
    const jsonObject = JSON.parse(body);
    callback(null, jsonObject);
  });
};
/**
 * This is the focal point of the above functions.
 * Handles multiple api requests to get the next
 * five times the ISS will flyover
 * input
 *  - callback with an error or results
 * returns
 *  - An error or null
 *  - array of flyover times or null:
 *    [{ risetime: <number>, durations: <number>}, ... ]
 */
const nextIssTimesForMyLocation = (callback) => {
  fetchMyIp((error, ip) => {
    if (error) return callback(error, null);
    fetchCoordsByIp(ip, (error, data) => {
      if (error) return callback(error, null);
      fetchISSFlyOverTimes(data, (error, data) => {
        if (error) return callback(error, null);
        callback(error, data.response);
      }); // fetchCoordsByIp
    }); // fetchCoordsByIp
  }); // fetchMyIp
};

/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = {
  fetchMyIp,
  fetchCoordsByIp,
  fetchISSFlyOverTimes,
  nextIssTimesForMyLocation
};