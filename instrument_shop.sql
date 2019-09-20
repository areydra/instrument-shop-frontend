-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2019 at 05:36 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `instrument_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(35) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Guitar', 'https://i.imgur.com/UcXjbHv.png', '2019-09-19 09:47:33', '2019-09-19 09:47:33'),
(2, 'Bass', 'https://i.imgur.com/9RRU8TU.png', '2019-09-19 09:48:59', '2019-09-19 09:48:59'),
(3, 'Piano', 'https://i.imgur.com/HCbJR9J.png', '2019-09-19 09:58:25', '2019-09-19 09:58:25'),
(4, 'Ukulele', 'https://i.imgur.com/chfvBFR.png', '2019-09-19 09:59:29', '2019-09-19 09:59:29'),
(21, 'Harp', 'https://i.imgur.com/yPK0gOz.png', '2019-09-19 17:29:50', '2019-09-19 17:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `name` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `qty` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `description`, `qty`, `id_category`, `created_at`, `updated_at`) VALUES
(1, 'Grand Piano C5XS', 25000000, 'https://id.yamaha.com/id/files/08FEFBD97E2A499CA7B73B125A6DCE38_12073_735x735_044ef863483a1a381b2ea2d192e30e78.jpg', 'The voice of a piano has a limitless facility for expression, shifting with the melody and overlaying notes into a wonderful harmony. CX Series pianos are high-grade grand pianos, possessing both power and subtlety.', 3, 3, '2019-09-18 00:32:00', '2019-09-18 00:32:00'),
(2, 'Grand Piano C7X', 2000000, 'https://id.yamaha.com/id/files/DDE64156024E44E7B449EBD21207A018_12073_735x735_2e7a42715e3fa7047a9db18680939e00.jpg', 'The top model in the CX Series is very close to a concert grand, and “sings” with a voice of refined grace.', 10, 3, '2019-09-18 07:32:00', '2019-09-18 07:32:00'),
(29, 'CORT AD-810-OP ACOUSTIC GUITAR', 1112000, 'https://s3-ap-southeast-1.amazonaws.com/mgcoid/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/e/m/empty_1_10.jpg', 'Cort’s oldest acoustic series, the Standard Series defines superb performance and value for the money. The Standard Series guitars are affordable but offer good solid performance for beginners and hobbyists alike in a variety of models with different types of features for any playing situation.', 10, 1, '2019-09-20 00:32:09', '2019-09-20 00:32:09'),
(30, 'CORT AC100 OP CLASSIC GUITAR', 1192000, 'https://s3-ap-southeast-1.amazonaws.com/mgcoid/catalog/product/c/o/cort-ac100-op_3.jpg', 'The traditional style AC models have been re-engineered to improve resonance for an authentic classical guitar sound. ', 10, 1, '2019-09-19 17:33:53', '2019-09-19 17:33:53'),
(31, 'CORT ISB4-CUSTOM-NAT ELECTRIC BASS', 9952000, 'https://s3-ap-southeast-1.amazonaws.com/mgcoid/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/c/o/cort-isb_6.jpg', 'Indro Signature Series', 5, 2, '2019-09-20 00:37:11', '2019-09-20 00:37:11'),
(32, 'Guitalele GL1', 800000, 'https://id.yamaha.com/id/files/1032B260CCE246B0B6782CC5CE91C0A4_12073_735x735_d25f203888b4621bc8aa935439365eb0.jpg', 'Gitar Ukulele dengan string nilon dengan skala 322mm. Meskipun bentuknya yang mini, gitar ini dirancang sama seperti gitar nilon string tipe regular. Bawa gitar ini kemanapun anda pergi', 15, 4, '2019-09-20 00:38:59', '2019-09-20 00:38:59'),
(33, '33 String Acoustic/Electric Grand H', 53741400, 'https://images-na.ssl-images-amazon.com/images/I/41GyY5Xi-gL._SS400_.jpg', 'THESE HARPS REQUIRE 8-10 WEEKS BUILD TIME\n\nThe Grand Harpsicle Harp is the first ever feather weight acoustic/electric lever harp. It has 33 strings, extends two octaves below middle C and weighs no more than an electric guitar - just 10 pounds. It can be played, on the detachable legs (included), as a floor harp; played, without legs, as a lap harp, or for a maximum mobility you can use a strap and play it standing.\n\nThe Grand Harpsicle Harp can be played acoustically like any other harp but, when needed it can be played through an amplifier either using a plug-in cable or a wireless transmitter. The Grand Harpsicle Harp is also ideal for therapy work because of its mobility, weight, and extended 33 string range. These harps are made to order so please allow 4-8 weeks for processing. Harp orders may be changed or cancelled within the first week the order is placed at no charge. After one week, cancellations are subject to a 20% restocking fee.\n\nIncluded with your harp is:\n\n1) Mel Bay Harpsicle Harp Method, Book 1 (Book and DVD): The Harpsicle Harp method book is an excellent tool for learning to play the Harpsicle Harp or any size harp from the very beginning. The method contains lessons on the parts of the harp, tuning, stringing, and taking care of your instrument. Also included in the method are reading music, time signatures and counting, placing and bracketing, finger drills, and much more. There are also eighteen songs, starting from very easy and continuing to add to the music, as the student progresses. All songs have labeled notes, to help the students learn notes and fingering. A DVD compliments the book, and follows up the written instructions, with video footage, so the student can visually see the method.\n\nFeatures:\n\nDetacheable stand\nDimensions 45 x 28 x 6 in\nTuning Wrench & Strap Buttons\nString type Nylon monofilament, nylon wrapped & metal wrapped\nWeight: 11 lbs', 2, 21, '2019-09-20 00:41:02', '2019-09-20 00:41:02'),
(34, 'Ukulele Soprano', 1088652, 'https://images-na.ssl-images-amazon.com/images/I/81rra-0CguL._SS1000_.jpg', 'The Official Kala Ukulele Starter Kit comes with everything you need to start playing today. It includes a high-quality mahogany soprano ukulele with Aquila strings, quality open gear tuners, and GraphTech NuBone nut and saddle. The kit also includes a Kala logo tote bag, a 20-page Quick Start Guide with information about your new ukulele, and all the tips you need to get started! Learn to play songs in minutes with Kala’s FREE, easy to follow online lessons through the Kala Brand Music website.', 10, 4, '2019-09-20 00:46:20', '2019-09-20 00:46:20'),
(35, 'Ibanez 4 String Bass Guitar, Right, Walnut Flat (GSRM20BWNF)', 3176826, 'https://images-na.ssl-images-amazon.com/images/I/81ocu2aj2TL._SS400_.jpg', 'Don’t be fooled into thinking the Ibanez GSR Micro is a toy. It’s made to the same high standards of the other GIO series guitars. The GSRM20B features, small scale SR body, full sound pickups, the same construction, same materials, and same set-up and inspection as its full size counterparts. Its shorter 28. 6” scale makes it perfect for tour buses, space-restricted home studios, folks with smaller hands, as well as young rockers or beginners.', 5, 2, '2019-09-19 10:52:06', '2019-09-19 10:52:06'),
(36, 'Best Choice Products 22-Fret Full Size Acoustic Electric Bass Guitar W/ 4-Band Equalizer, Adjustable Truss Rod, Solid Construction - Black', 1523826, 'https://images-na.ssl-images-amazon.com/images/I/712Jjy6WEmL._SS400_.jpg', 'Best Choice Products 22-Fret Full Size Acoustic Electric Bass Guitar w/ 4-Band Equalizer, Adjustable Truss Rod, Solid Construction - Black', 4, 2, '2019-09-20 00:56:10', '2019-09-20 00:56:10'),
(37, 'Fender FA-115 Acoustic Guitar Bundle With Gig Bag, Tuner, Strings, Strap, Picks, And Austin Bazaar Instructional DVD', 2828826, 'https://images-na.ssl-images-amazon.com/images/I/71kPZKTErpL._SS400_.jpg', 'Fender FA-115 Acoustic Guitar Bundle with Gig Bag, Tuner, Strings, Strap, Picks, and Austin Bazaar Instructional DVD', 5, 1, '2019-09-20 00:57:21', '2019-09-20 00:57:21');

-- --------------------------------------------------------

--
-- Table structure for table `request_products`
--

CREATE TABLE `request_products` (
  `id` int(11) NOT NULL,
  `name` varchar(35) NOT NULL,
  `email` varchar(50) NOT NULL,
  `instrument` varchar(50) NOT NULL,
  `telephone` varchar(13) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request_products`
--

INSERT INTO `request_products` (`id`, `name`, `email`, `instrument`, `telephone`, `description`, `created_at`, `updated_at`) VALUES
(8, 'Maman', 'maman88@gmail.com', 'Drums', '0812888379', 'Apakah ada drum? kalau ada tolong hubungi saya..', '2019-09-20 02:10:09', '2019-09-20 02:10:09'),
(9, 'Bayu Adi', 'bayua829@gmail.com', 'Guitar Yamaha APX II', '0878788820', 'Saya pesan guitar yamaha.', '2019-09-20 02:11:44', '2019-09-20 02:11:44');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(35) NOT NULL,
  `email` varchar(35) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `telephone` varchar(13) NOT NULL,
  `id_level` int(11) NOT NULL DEFAULT 2,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `address`, `telephone`, `id_level`, `created_at`, `updated_at`) VALUES
(2, 'areydra', 'areydra@gmail.com', '$2a$10$GBNWVfQKbq4./9dNDCATCeJxOwVLPv3euYRkwW2GphHidAOMohu5e', 'Wanaherang, Gunung Putri, Bogor, Jawa Barat', '083807106451', 2, '2019-09-18 14:15:40', '2019-09-18 14:15:40'),
(3, 'mudamuda', 'mudamuda@gmail.com', '$2a$10$mJE2dTUN1ml5Gc1mrvwV0OLQpL.XTdbGOjj5hVaPZM5qdNxlfypZG', 'mudaa', '02382121923', 2, '2019-09-18 22:12:01', '2019-09-18 22:12:01'),
(4, 'mondar', 'mondar@gmail.com', '$2a$10$f0rHFUDJoy/o/Ef6iakopOG.HZiGg.Kl6Nv2pLxS8BzPhpUs/f6uW', 'Mondar Dabes', '08329281910', 2, '2019-09-19 07:45:46', '2019-09-19 07:45:46'),
(5, 'admin', 'admin@gmail.com', '$2a$10$o64wu6ykOerVkckQebusIej.Ygnxb02loYnNv3cbfy/PtoxjcCO6S', 'ADMINNN', '08772188829', 1, '2019-09-19 09:48:47', '2019-09-19 09:48:47');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Indexes for table `request_products`
--
ALTER TABLE `request_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_level` (`id_level`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `request_products`
--
ALTER TABLE `request_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`);

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_level`) REFERENCES `level` (`id`);

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `wishlists_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `wishlists_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
