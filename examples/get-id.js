#!/usr/bin/env node

var airbnb = require('../airbnb'),
    client = new airbnb({
      username: process.env.AIRBNB_USERNAME,
      password: process.env.AIRBNB_PASSWORD
    });

console.log( client );
client.login().then(function(res) {
  console.log('loggedin ', client);
  // Get info for hosting by CLI
  client.getInfo(process.argv[2]).then(function(info) {
    console.log(info);
  });

});

