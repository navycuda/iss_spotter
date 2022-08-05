/* Require */
const request = require(`request`);
const { outputToConsole } = require(`@navycuda/lotide`);
const { fetchMyIp } = require("./iss");

/* Tcp:Http */
/* Arguments */
/* Export Functions */
/* Local Functions */
/* Execution & Test Data */
fetchMyIp((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

/* Exports */