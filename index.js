const { fetchMyIP } = require('./iss')

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It broke!", error)
    return;
  }
  console.log("It worked! Returned IP: ", ip);
});

