/* Require */
const request = require(`request`);
const { nextIssTimesForMyLocation } = require("./iss");

/* Tcp:Http */
/* Arguments */
/* Export Functions */
/* Local Functions */
/* Execution & Test Data */
// fetchMyIp((error, ip) => {
//   // if (error) {
//   //   console.log("It didn't work!" , error);
//   //   return;
//   // }
//   // console.log('It worked! Returned IP:' , ip);
//   fetchCoordsByIp(ip, (error, data) => {
//     fetchISSFlyOverTimes(data, (error, data) => {
//       outputToConsole(error, data);
//     }); // fetchCoordsByIp
//   }); // fetchCoordsByIp
// }); // fetchMyIp

const outputToConsole = (error, flyOvers) => {

  for (let f = 0; f < flyOvers.length; f++) {

    const date = new Date(0);
    date.setUTCSeconds(flyOvers[f].risetime);
    

    console.log(`Next pass at ${date.toLocaleString({ timeZone: `America/Vancouver` })} for ${flyOvers[f].duration} seconds`);

  }



};

nextIssTimesForMyLocation((error, flyOvers) => {
  outputToConsole(error, flyOvers);
});

/* Exports */