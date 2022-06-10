const { nextISSTimesForMyLocation, printFlyoverTimes } = require('./iss');

// const ip = fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It broke!", error);
//     return;
//   }
//   // You win, IP address retrieved
//   console.log("It worked! Returned IP: ", ip);
//   return ip;
// });

// const coords = fetchCoordsByIP(ip, (error, data) => {
//   if (error) {
//     console.log("The geolocator broke! ", error);
//     return;
//   }
//   // You win, coordinates retrieved
//   console.log("It worked! Returned Coordinates: ", data);
//   return data;
// });

// const exampleCoords = { latitude: 51, longitude:-113 }

// fetchISSFlyoverTimes(exampleCoords, (error, data) => {
//   if (error) {
//     console.log("THE ISS PART BROKE: ", error);
//     return;
//   }
//   console.log("ISS flyover times: ", data);
//   return data;
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // If you make it here, it worked and we get the flyover times, wooooo!
  printFlyoverTimes(passTimes);
});