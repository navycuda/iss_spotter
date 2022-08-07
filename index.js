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

    const timeInMs = flyOvers[f].risetime * 1000;

    const date = new Date(timeInMs);

    const dateFormat = new Intl.DateTimeFormat('en-US', {
      timeZone: `America/Vancouver`,
    });

    const outputDate = dateFormat.format(date);

    console.log(dateFormat);
    console.log(date.toLocaleTimeString("en-US", { timeZone: `America/Vancouver` ,hour: `2-digit`, hour12: false, minute: `2-digit`, second: `2-digit`, timeZoneName: 'long'  }));
    console.log(date.toDateString());
    console.log(date.toTimeString());

    // console.log(`Next pass at ${dateString} for ${flyOvers[f].duration} seconds`);

  }



};

nextIssTimesForMyLocation((error, flyOvers) => {
  outputToConsole(error, flyOvers);
});

/* Exports */