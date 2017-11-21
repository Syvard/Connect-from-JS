const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  client.query("SELECT * FROM famous_people WHERE last_name =$1 OR first_name = $1", [process.argv[2]], (err, result) => {
    console.log('Searching...')
    console.log(result.rows.length +` person by the name '`+ process.argv[2] + `'`);
    console.log(result.rows[0].first_name, result.rows[0].last_name + ", born " + result.rows[0].birthdate.toLocaleDateString())
    client.end();
  });
});