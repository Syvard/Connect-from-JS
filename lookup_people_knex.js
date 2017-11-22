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

knex.select().from('famous_people').where('first_name', '=', process.argv[2]).orWhere('last_name', '=', process.argv[2]).asCallback(function(err, rows){
  console.log("Searching...");
  console.log(rows.length + " result(s) found matching the name \'" + process.argv[2] + "\' :" + " " +(rows[0]['first_name']) + " " + (rows[0]['last_name']) + " " + (rows[0]['birthdate'].toLocaleDateString()));

knex.destroy();
})