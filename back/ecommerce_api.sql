-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 11 juil. 2023 à 08:59
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecommerce_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

DROP TABLE IF EXISTS `commande`;
CREATE TABLE IF NOT EXISTS `commande` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `code_postale` varchar(255) NOT NULL,
  `mode_paiement` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `spec_product` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `name`, `first_name`, `adresse`, `city`, `code_postale`, `mode_paiement`, `product_name`, `spec_product`, `quantity`) VALUES
(4, 'Kanto', 'ANDRIAHARINIAINA', 'III AB 50', 'Ivato', '101', 'CHèque ', 'Chaise', 'En bois et en soie', '34'),
(2, 'Hardy', 'HERINAVALONA', 'III AB 50 A', 'IMERINA AFOVOANY', '102', 'En espèce', 'Montre', 'Couleur argenté', '1'),
(3, 'Miora', 'RAKOTOMALALA', 'III AB 50', 'Andrononobe', '101', 'Chèque', 'Casque', 'Bleue', '2');

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

DROP TABLE IF EXISTS `paiement`;
CREATE TABLE IF NOT EXISTS `paiement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` int NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `code_postale` int NOT NULL,
  `quantity` int NOT NULL,
  `total` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `paiement`
--

INSERT INTO `paiement` (`id`, `name`, `email`, `telephone`, `adresse`, `ville`, `code_postale`, `quantity`, `total`) VALUES
(13, 'Kiwi', 'kiwi@gmail.com', 346623117, 'III AB 50', 'Antananarivo ', 102, 5, 6),
(12, 'Hardy', 'hardy@gmail.com', 346623117, 'III AB 50', 'Antananarivo ', 102, 7, 354),
(11, 'Kanto', 'kanto@gmail.com', 325066496, 'III AB 50', 'Antananarivo Ivato', 101, 1, 253);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `profile_image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `profile_image`) VALUES
(1, 'kiwi', 'kiwi@gmail.com', '$2b$10$9HRGt80gr7kn2W2colL15eY9I0xwXQ8fmkxYIAm6is6o0vVdMkMKi', 'admin', 'profile_image_1687770989630-675592817.png'),
(9, 'Aina', 'aina@gmail.com', '$2b$10$oDHChxSSKK1FAQXzOOqDyeG2J4rKd773glRf1VFYGOe4kda1DqjJy', 'client', 'profile_image_1689042395445-77679242.svg'),
(10, 'Miora', 'miora@gmail.com', '$2b$10$ur1i5x4sOGTJdL8RM8KJ6O8dvbLXTDUmMa6E6TjsgnXZ3jjeZpt8m', 'client', 'profile_image_1689042427491-807449652.jpg'),
(4, 'Kanto', 'kanto@gmail.com', '$2b$10$XE8LtUnWGsFhRrX0Xz.0SuwCz4.dIJqgYeiCwwvrm8p43jjD6DEcW', 'admin', 'profile_image_1687771316802-7422967.png'),
(11, 'Hardy', 'hardy@gmail.com', '$2b$10$g/FRMQGcFbaNkh3HrZznzOZo4RrqWdaOKLkHqkq.6QrMLaIddOaim', '', 'profile_image_1689061181534-754292325.jpg'),
(12, 'Mihaja', 'mihaja@gmail.com', '$2b$10$VF1ppY0jRz8FC2XO167HQOYmSzq/knKU4gvtaEkln/g2i/sbTFdt6', '', 'profile_image_1689061352886-748511748.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
