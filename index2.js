/* Require */
const { fetchMyIp, fetchCoordsByIP  } = require(`./iss_promised`);

/* Tcp:Http */
/* Arguments */
/* Export Functions */
/* Local Functions */
/* Execution & Test Data */
fetchMyIp()
  .then(fetchCoordsByIP)
  .then(body => console.log(body));

/* Exports */