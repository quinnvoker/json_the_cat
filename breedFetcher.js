const request = require('request');

const apiAddress = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
  request(apiAddress + breedName.slice(0,4), (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length < 1) {
      callback(`Breed '${breedName}' not found in database!`);
      return;
    }
    callback(error, data[0].description);
  });
};

module.exports = fetchBreedDescription;