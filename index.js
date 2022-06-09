const { fetchMyIP, fetchCoordsByIP } = require('./iss')

let ip = fetchMyIP((error, ip) => {
  if (error) {
    console.log("It broke!", error)
    return;
  }
  console.log("It worked! Returned IP: ", ip);
  return ip;
});



let coords = fetchCoordsByIP(ip, (error, data) => {
  if (error) {
    console.log("The geolocator broke! ", error);
    return;
  }
  console.log("It worked, Returned Coordinates: ", data);
  return data;
});