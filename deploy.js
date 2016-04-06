var client = require('scp2');

client.scp('build/', {
  host: 'omoim-balance.dellin.local',
  username: 'virtualpc',
  password: 'Dellin2000',
  path: '/var/www/frontend/public/temp'
}, function(err){
  console.log(err);
});
