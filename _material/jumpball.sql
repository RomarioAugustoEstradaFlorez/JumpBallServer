-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2023 at 09:16 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jumpball`
--

-- --------------------------------------------------------

--
-- Table structure for table `score`
--

CREATE TABLE `score` (
  `id` varchar(255) NOT NULL COMMENT 'Id from the score user name',
  `name` varchar(255) NOT NULL COMMENT 'Name from the user that plays',
  `score` int(11) NOT NULL COMMENT 'Number that gain in the game'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='It wil have the data saved from the players that played the ';

--
-- Dumping data for table `score`
--

INSERT INTO `score` (`id`, `name`, `score`) VALUES
('077f4ad7-d4fc-4ecf-a790-1d9e1d9d094e', 'roma', 420),
('265b195f-4366-440b-85e0-0fe26cc2d45f', 'hey', 12),
('533d952e-505c-4fa1-a29a-739317e94ee2', 'algo', 970),
('68675423-4c77-471e-b6b5-d0013d9e9da8', 'estesies', 570),
('8aee8f8d-4b4d-4638-a217-e4fb2b8054d8', 'voyyy', 42),
('923c255a-3525-47ae-9042-1d147f8eb8d5', 'millon', 50),
('949c0408-95e6-4638-b6e6-857ac54ef505', 'straasasding', 12),
('a1da7b80-b8a6-4134-947d-14ac22a69954', 'heu', 1234),
('c08622c0-5dbb-439e-bc66-1d3d191ac53b', 'entonces', 50),
('cf5d8d7d-6dfb-476c-97b8-689056afea65', 'something', 1234),
('e892aa4b-c112-4afd-a7f0-013926a17cec', 'Romarioooo', 42),
('fa41af78-c793-41d5-b5ec-f8766a21148a', 'danie', 190);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
