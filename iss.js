/* Require */
const request = require(`request`);

/* Tcp:Http */
const urlIp = `https://api64.ipify.org/?format=json`;
const urlGp = `http://ipwho.is/`;

/* Arguments */
/* Export Functions */
// Fetchs my ip address
const fetchMyIp = (callback) => {
  request(urlIp, (error, response, body) => {
    if (error) return callback(error, null);
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

/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = {
  fetchMyIp,
  fetchCoordsByIp
};