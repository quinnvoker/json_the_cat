const request = require('request');

const apiAddress = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = process.argv[2].slice(0,4);

request(apiAddress + breed, (error, response, body) => {
  if (error) {
    throw error;
  }
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});