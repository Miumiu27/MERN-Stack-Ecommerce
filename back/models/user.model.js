const connection = require("../config/db");
const bcrypt = require("bcrypt");

const createUser = (user, callback) => {
  const { username, email, password, profile_image } = user;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Erreur lors de la création du mot de passe haché :", err);
      return callback(err);
    }
    const insertQuery = `INSERT INTO users (username, email, password, profile_image) VALUES (?, ?, ?, ?)`;
    connection.query(
      insertQuery,
      [username, email, hashedPassword, profile_image],
      (err, result) => {
        if (err) {
          console.error("Erreur lors de la création de l'utilisateur :", err);
          return callback(err);
        }
        return callback(null, result.insertId);
      }
    );
  });
};

const getUserByEmail = (email, callback) => {
  const selectQuery = `SELECT * FROM users WHERE email = ?`;
  connection.query(selectQuery, [email], (err, rows) => {
    if (err) {
      console.error(
        "Erreur lors de la récupération de l'utilisateur par e-mail :",
        err
      );
      return callback(err);
    }
    return callback(null, rows[0]);
  });
};

const getAllUsers = (callback) => {
  const selectQuery = `SELECT * FROM users`;
  connection.query(selectQuery, (err, rows) => {
    if (err) {
      console.error(
        "Erreur lors de la récupération de tous les utilisateurs :",
        err
      );
      return callback(err);
    }
    return callback(null, rows);
  });
};

const deleteUser = (id, callback) => {
  const deleteQuery = `DELETE FROM users WHERE id = ?`;
  connection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("Erreur lors de la suppression de l'utilisateur :", err);
      return callback(err);
    }
    return callback(null);
  });
};

const getUsersCount = (callback) => {
  const countQuery = `SELECT COUNT(*) as count FROM users`;
  connection.query(countQuery, (err, result) => {
    if (err) {
      console.error(
        "Erreur lors de la récupération du nombre d'utilisateurs :",
        err
      );
      return callback(err);
    }
    return callback(null, result[0].count);
  });
};

module.exports = {
  createUser,
  getUserByEmail,
  getAllUsers,
  deleteUser,
  getUsersCount,
};
