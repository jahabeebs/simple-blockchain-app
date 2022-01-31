const client = require('./client');

client.request('startMining', ["Medium"], function(err, response) {
  if(err) throw err;
  console.log(response.result); // success!
});
