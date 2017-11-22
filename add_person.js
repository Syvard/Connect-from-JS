const settings = require("./settings");

var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

var input = {first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]};

knex.insert(input).into("famous_people").then(function (id) {
  console.log("Adding...")
})
.finally(function(){
  console.log("Complete.")
  knex.destroy();
})
