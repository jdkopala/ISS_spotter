const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`)
};

const fetchISSFlyoverTimes = function(body) {
  let latitude = JSON.parse(body).latitude;
  let longitude = JSON.parse(body).longitude;
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyoverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
  });
}
module.exports = { nextISSTimesForMyLocation };