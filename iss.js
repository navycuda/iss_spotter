/* Require */
const request = require(`request`);

/* Tcp:Http */
const fetchIp = `https://api64.ipify.org/?format=json`;

/* Arguments */
/* Export Functions */
const fetchMyIp = (callback) => {
  request(fetchIp, (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null)
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = { fetchMyIp };