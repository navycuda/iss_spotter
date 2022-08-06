/* Require */
const request = require(`request`);
const outputToConsole = require(`@navycuda/lotide`).outputToConsole;
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

nextIssTimesForMyLocation((error, flyOvers) => {
  outputToConsole(error, flyOvers);
});

/* Exports */