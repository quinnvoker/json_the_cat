const request = require('request');

const apiAddress = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = process.argv[2];

request(apiAddress + breed.slice(0,4), (error, response, body) => {
  if (error) {
    throw error;
  }
  const data = JSON.parse(body);
  if (data.length < 1) {
    console.log(`Breed '${breed}' not found in database!`);
    return;
  }
  console.log(data[0].description);
});