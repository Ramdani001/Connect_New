-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table db_connect.message
CREATE TABLE IF NOT EXISTS `message` (
  `id_m` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `stat` int DEFAULT NULL,
  PRIMARY KEY (`id_m`)
);

-- Dumping data for table db_connect.message: ~2 rows (approximately)
REPLACE INTO `message` (`id_m`, `id_user`, `stat`) VALUES
	(1, 59, 2),
	(2, 58, 2);

-- Dumping structure for table db_connect.person
CREATE TABLE IF NOT EXISTS `person` (
  `id_p` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT '0',
  `id_product` int DEFAULT '0',
  `name` varchar(255) DEFAULT '0',
  `no_telp` varchar(50) DEFAULT '0',
  `alamat` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id_p`)
);

-- Dumping data for table db_connect.person: ~0 rows (approximately)

-- Dumping structure for table db_connect.product
CREATE TABLE IF NOT EXISTS `product` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id_product`)
);

-- Dumping data for table db_connect.product: ~2 rows (approximately)
REPLACE INTO `product` (`id_product`, `title`, `type`, `price`, `description`, `url`, `file`, `created_at`, `updated_at`) VALUES
	(19, 'Tutorial', 'Youtube', '123000', 'tutorial\nlkzdlfsldfsdf\ns\ndfs\ndfj\n', 'https://www.youtube.com/embed/dI5XPuMZ5WM?si=PGVSqgkomrdf0gO7', '1724006063003_er.jpg', '2024-08-19', '2024-08-19'),
	(20, 'Andre', 'Instagram', '345000', 'lkadsjlska', 'https://www.youtube.com/embed/hVnqUucP_XU?si=IyrK9ip7KohCwyo-', '1724006432684_WhatsApp Image 2024-08-18 at 23.26.27_be2de815.jpg', '2024-08-19', '2024-08-19');

-- Dumping structure for table db_connect.sub_message
CREATE TABLE IF NOT EXISTS `sub_message` (
  `id_sm` int NOT NULL AUTO_INCREMENT,
  `id_m` int NOT NULL DEFAULT '0',
  `send_mess` varchar(500) DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_sm`)
);

-- Dumping data for table db_connect.sub_message: ~9 rows (approximately)
REPLACE INTO `sub_message` (`id_sm`, `id_m`, `send_mess`, `id_user`) VALUES
	(1, 1, 'Apakah product editing video untuk Instagram Ads, ready gan?', 59),
	(2, 1, 'Masih Gan', 1),
	(3, 2, 'Ready?', 58),
	(4, 2, 'Semua product/video ready ga, untuk proses pembuatan yang diperlukan video mentahannya gan', 1),
	(5, 2, 'f', 1),
	(6, 2, 'dfsdfsdfs', 58),
	(10, 1, 'Hallo apakah jadi?', 1),
	(11, 2, 'Woy', 1),
	(23, 2, 'df', 58),
	(24, 2, 'TEST', 58),
	(25, 2, 'TY', 58);

-- Dumping structure for table db_connect.transaksi
CREATE TABLE IF NOT EXISTS `transaksi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_trans` varchar(100) DEFAULT NULL,
  `id_product` int DEFAULT '0',
  `id_user` int DEFAULT '0',
  PRIMARY KEY (`id`)
);

-- Dumping data for table db_connect.transaksi: ~0 rows (approximately)
REPLACE INTO `transaksi` (`id`, `id_trans`, `id_product`, `id_user`) VALUES
	(1, 'TR-004', 19, 58);

-- Dumping structure for table db_connect.users
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tipe` int NOT NULL DEFAULT '0',
  `nama` varchar(255) DEFAULT NULL,
  `no_telp` varchar(20) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id_user`)
);

-- Dumping data for table db_connect.users: ~3 rows (approximately)
REPLACE INTO `users` (`id_user`, `email`, `username`, `password`, `tipe`, `nama`, `no_telp`, `alamat`, `created_at`, `updated_at`) VALUES
	(1, 'administrator@gmail.com', 'Administrator', '$2a$10$cZoNUvAfy6jRYvhcN2j.GebjbfkZF9M0b17dm1saq/mptyO3MFfb.', 1, 'Administrator', '0', 'PT.Tect-In Dynamic', '2024-08-13', '2024-08-13'),
	(57, 'account12@bnana.id', 'qwert', '$2a$10$5t4HSsoHJqY0GwYQ7xmEwOjx/1P3FIOVRPcHcVFziiz5Af1AtFmVW', 2, '', '', '', '2024-08-14', '2024-08-14'),
	(58, 'rizkan0990@gmail.com', 'qwe', '$2a$10$n0xLuhDDOZsE6QB0hk.0buFTA8SeQlAv6sKiBGEwFFhOLlNdYjTJq', 2, 'Yossandi', '', '', '2024-08-14', '2024-08-14'),
	(59, 'account3@bnana.id', 'qwerty', '$2a$10$WLEXt6ruf8iiOmdhBdPqZeuyHkcOlhxumIIJUd7viqG4IlbrNadKC', 2, 'Rizkan Ramdani', '', '', '2024-08-14', '2024-08-14');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
