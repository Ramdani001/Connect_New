
CREATE TABLE IF NOT EXISTS `cart` (
  `id_cart` int NOT NULL AUTO_INCREMENT,
  `id_product` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `paid` int DEFAULT NULL,
  PRIMARY KEY (`id_cart`)
);

REPLACE INTO `cart` (`id_cart`, `id_product`, `id_user`, `paid`) VALUES
	(37, 19, 60, 2),
	(38, 19, 61, 2);

CREATE TABLE IF NOT EXISTS `message` (
  `id_m` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `stat` int DEFAULT NULL,
  PRIMARY KEY (`id_m`)
)
REPLACE INTO `message` (`id_m`, `id_user`, `stat`) VALUES
	(58, 60, 2),
	(59, 61, 2),
	(60, 62, 2);

CREATE TABLE IF NOT EXISTS `person` (
  `id_p` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT '0',
  `id_product` int DEFAULT '0',
  `name` varchar(255) DEFAULT '0',
  `no_telp` varchar(50) DEFAULT '0',
  `alamat` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id_p`)
);

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

REPLACE INTO `product` (`id_product`, `title`, `type`, `price`, `description`, `url`, `file`, `created_at`, `updated_at`) VALUES
	(19, 'Tutorial', 'Youtube', '123000', 'tutorial\nlkzdlfsldfsdf\ns\ndfs\ndfj\n', 'https://www.youtube.com/embed/dI5XPuMZ5WM?si=PGVSqgkomrdf0gO7', '1724006063003_er.jpg', '2024-08-19', '2024-08-19'),
	(20, 'Andre', 'Instagram', '345000', 'lkadsjlska', 'https://www.youtube.com/embed/hVnqUucP_XU?si=IyrK9ip7KohCwyo-', '1724006432684_WhatsApp Image 2024-08-18 at 23.26.27_be2de815.jpg', '2024-08-19', '2024-08-19');

CREATE TABLE IF NOT EXISTS `sub_message` (
  `id_sm` int NOT NULL AUTO_INCREMENT,
  `id_m` int NOT NULL DEFAULT '0',
  `send_mess` varchar(500) DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_sm`)
);

REPLACE INTO `sub_message` (`id_sm`, `id_m`, `send_mess`, `id_user`) VALUES
	(39, 58, 'Hallo apakah jadi?', 60),
	(40, 58, 'Yang', 60),
	(41, 59, 'Hallo apakah jadi?', 61),
	(42, 60, 'Hallo apakah jadi?', 62);

CREATE TABLE IF NOT EXISTS `transaksi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_trans` varchar(100) DEFAULT NULL,
  `id_product` varchar(255) DEFAULT NULL,
  `id_user` int DEFAULT '0',
  `price` varchar(50) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `payment` varchar(100) DEFAULT NULL,
  `nama_pengirim` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

REPLACE INTO `transaksi` (`id`, `id_trans`, `id_product`, `id_user`, `price`, `status`, `payment`, `nama_pengirim`, `file`, `created_at`) VALUES
	(46, 'TRX-4571', '19', 60, '0', 3, '', NULL, '', '2024-08-25 03:13:46'),
	(47, 'TRX-9904', '19', 60, '0', 2, 'MANDIRI', 'Ajang', '1724573653465_bri.jpg', '2024-08-25 03:13:56'),
	(48, 'TRX-8861', '19', 61, '0', 2, 'BCA', 'Shintias', '1724579579515_M.jpg', '2024-08-25 04:52:46');

CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tipe` int NOT NULL DEFAULT '0',
  `nama` varchar(255) DEFAULT NULL,
  `no_telp` varchar(20) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id_user`)
);

REPLACE INTO `users` (`id_user`, `email`, `username`, `password`, `tipe`, `nama`, `no_telp`, `alamat`, `file`, `created_at`, `updated_at`) VALUES
	(1, 'administrator@gmail.com', 'Administrator', '$2a$10$cZoNUvAfy6jRYvhcN2j.GebjbfkZF9M0b17dm1saq/mptyO3MFfb.', 1, 'Administrator', '0', 'PT.Tect-In Dynamic', NULL, '2024-08-13', '2024-08-13'),
	(60, 'rizkan0990@gmail.com', 'tre', '$2a$10$oAXsVfRl39ZpDwjLpgqWBeqlJWe3ZtIgELwwZIeufm24lzYQeVdXm', 2, 'Rizkan Ramdani', '039483948958', 'Jl. Babakan Jati', 'profile_file.jpg', '2024-08-21', '2024-08-21'),
	(62, 'account12@bnana.id', 'elsa', '$2a$10$jzs9Vnd2YPTsd8rWppC4CerbbcfTeydSe1sV6kW/gwNYL1VbgKVhu', 2, 'Rizkan Ramdani', '54645', 'Jl. Babakan Jati', '1724592781135_c32005c9-2bbf-494c-a0bc-9e44c229efb6.jpg', '2024-08-25', '2024-08-25'),
	(63, 'ramdani@gmail.com', 'ramdani', '$2a$10$3Upv5i/qMpugjZXidEthiOaEzcWfKuVNyxxmUIbcqu4OHh32I58mK', 2, '', '', '', NULL, '2024-08-25', '2024-08-25');
