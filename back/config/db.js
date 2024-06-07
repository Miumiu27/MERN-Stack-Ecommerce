const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((error) => {
  if (error) {
    console.error("Connexion échoué lors de la connexion avec mysql", error);
    return;
  } else {
    console.log("Connecté à la base de donnée Mysql");
  }
});

module.exports = db;
