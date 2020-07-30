const request = require('request');

const apiAddress = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = 'sibe';

request(apiAddress + breed, (error, response, body) => {
  if (error) {
    throw error;
  }
  console.log(typeof body);
});