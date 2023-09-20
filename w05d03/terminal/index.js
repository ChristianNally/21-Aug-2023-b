const pg = require('pg');

const Client = pg.Client; // single connection to the db
// const Pool = pg.Pool; // collection of clients (5) managed

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const client = new Client(config);

client.connect();

const verb = process.argv[2];
const id = process.argv[3];
// console.log('verb:', verb);

switch (verb) {
  case 'browse': // if (verb === 'browse') {
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((results) => {
        console.log(results.rows);
        client.end();
      });
    break;

  case 'read':
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((results) => {
        console.log(results.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newVillainName = process.argv[4];
    const updateQuery = 'UPDATE movie_villains SET villain = $1 WHERE id = $2;';
    client.query(updateQuery, [newVillainName, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const villainMovie = process.argv[4];
    const addQuery = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);';
    client.query(addQuery, [villainName, villainMovie])
      .then(() => {
        console.log(`Disney+ is creating a solo series for ${villainName}`);
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('the villain was defeated!');
        client.end();
      });
    break;

  default:
    console.log('please use a BREAD verb');
    client.end();
}
