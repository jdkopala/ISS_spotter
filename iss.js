const request = require('request');

const fetchMyIP = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    console.log("error: ", error);
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`, null))
      return;
    }

    let ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request('https://api.ipbase.com/json/?apikey=ktQ8XzwXPzJ6jEK48lkOAsGmQ4ajTKh6iN84zK2s', (error, response, body) => {
    console.log("Error: ", error);
    if (error) {
    callback(error, null);
    return;
    }
  
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates: ${body}`, null))
      return;
    }
    const { latitude, longitude } = JSON.parse(body);

    callback(null, { latitude, longitude });
  })
}

module.exports = { fetchMyIP, fetchCoordsByIP };