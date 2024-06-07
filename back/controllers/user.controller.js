const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) {
      console.error(
        "Erreur lors de la récupération de tous les utilisateurs :",
        err
      );
      return res
        .status(500)
        .json({ message: "Erreur lors de la récupération des utilisateurs." });
    }
    res.json(users);
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  User.deleteUser(id, (err) => {
    if (err) {
      console.error("Erreur lors de la suppression de l'utilisateur :", err);
      return res
        .status(500)
        .json({ message: "Erreur lors de la suppression de l'utilisateur." });
    }

    res.json({ message: "Utilisateur supprimé avec succès." });
  });
};

const register = (req, res) => {
  const { username, email, password } = req.body;
  const profile_image = req.file;
  if (!username || !email || !password || !profile_image) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  const user = {
    username,
    email,
    password,
    profile_image: profile_image.filename,
  };
  User.createUser(user, (err, userId) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erreur lors de l'enregistrement de l'utilisateur." });
    }
    res.json({ message: "Utilisateur enregistré avec succès.", userId });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "E-mail et mot de passe requis." });
  }
  User.getUserByEmail(email, (err, user) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erreur lors de la récupération de l'utilisateur." });
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: "E-mail ou mot de passe incorrect." });
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({
          message: "Erreur lors de la comparaison des mots de passe.",
        });
      }
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "E-mail ou mot de passe incorrect." });
      }
      const token = jwt.sign({ userId: user.id }, process.env.jwtkey);
      console.log(token);
      res.json({ message: "Connexion réussie.", token });
    });
  });
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erreur lors de la déconnexion de l'utilisateur :", err);
      return res
        .status(500)
        .json({ message: "Erreur lors de la déconnexion." });
    }
    res.json({ message: "Déconnexion réussie." });
  });
};

const getUserRole = (req, res) => {
  let authorization = req.headers?.authorization?.replace("Bearer ", "");
  let cookie_parsing;
  try {
    cookie_parsing = jwt.verify(authorization, process.env.jwtkey);
  } catch (err) {
    console.error("Erreur lors de l'analyse du token :", err);
    return res
      .status(401)
      .json({ message: "Token d'authentification invalide." });
  }

  res.status(200).json({
    role: cookie_parsing,
  });
};

const isAuthenticated = (req, res, next) => {
  let authorization = req.headers?.authorization?.replace("Bearer ", "");
  if (!authorization) {
    return res
      .status(401)
      .json({ message: "Token d'authentification manquant." });
  }

  try {
    jwt.verify(authorization, process.env.jwtkey, (err, decoded) => {
      if (err) {
        console.error("Erreur lors de la vérification du token :", err);
        return res
          .status(401)
          .json({ message: "Token d'authentification invalide." });
      }

      req.userId = decoded.userId;
      next();
    });
  } catch (err) {
    console.error("Erreur lors de la vérification du token :", err);
    return res
      .status(401)
      .json({ message: "Token d'authentification invalide." });
  }
};

const getUsersCount = (req, res) => {
  User.getUsersCount((err, count) => {
    if (err) {
      console.error(
        "Erreur lors de la récupération du nombre d'utilisateurs :",
        err
      );
      return res.status(500).json({
        message: "Erreur lors de la récupération du nombre d'utilisateurs.",
      });
    }
    res.json({ count });
  });
};

module.exports = {
  login,
  register,
  logout,
  getUserRole,
  getAllUsers,
  deleteUser,
  isAuthenticated,
  getUsersCount,
};
