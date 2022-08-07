/* Require */
const { nextIssTimesForMyLocation  } = require(`./iss_promised`);

/* Tcp:Http */
/* Arguments */
/* Export Functions */
/* Local Functions */
const outputToConsole = (obj) => {
  console.log(obj);
};
/* Execution & Test Data */
// fetchMyIp()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));
nextIssTimesForMyLocation()
  .then((flyoverTimes) => {
    outputToConsole(flyoverTimes);
  })
  .catch((error) => {
    console.log(`Error: `, error.message);
  });

/* Exports */