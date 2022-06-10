const { nextISSTimesForMyLocation, printFlyoverTimes } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then((flyoverTimes) => {
    printFlyoverTimes(flyoverTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });