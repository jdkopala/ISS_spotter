const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip;
  return request(`https://api.ipbase.com/json/?apikey=ktQ8XzwXPzJ6jEK48lkOAsGmQ4ajTKh6iN84zK2s`)
};

const fetchISSFlyoverTimes = function(body) {
  let latitude = JSON.parse(body).latitude;
  let longitude = JSON.parse(body).longitude;
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyoverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
  });
}

const printFlyoverTimes = function(flyoverTimes) {
  for (const t of flyoverTimes) {
    const time = new Date(0);
    time.setUTCSeconds(t.risetime);
    const duration = t.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
};

module.exports = { nextISSTimesForMyLocation, printFlyoverTimes };