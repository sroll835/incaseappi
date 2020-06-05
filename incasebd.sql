-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Maio-2020 às 22:00
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `incasebd`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clase`
--

CREATE TABLE `clase` (
  `id_clase` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `area` varchar(50) NOT NULL,
  `duracion` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla que describe la clase';

--
-- Extraindo dados da tabela `clase`
--

INSERT INTO `clase` (`id_clase`, `titulo`, `descripcion`, `area`, `duracion`) VALUES
(1, 'Induccion', 'El estudiante identificarálos lineamientos y generalidades\r\ndel curso lo cual le permitirá2 conocer la metodología, contenidos y aplicaciones del mismo.', 'SOCIO-HUMANISTICA', '2');

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso`
--

CREATE TABLE `curso` (
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `duracion` varchar(10) NOT NULL,
  `numero_clases` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla que describe el curso';

--
-- Extraindo dados da tabela `curso`
--

INSERT INTO `curso` (`titulo`, `descripcion`, `duracion`, `numero_clases`, `id_curso`) VALUES
('Fundamentacion Vigilante', 'Un curso para fundamentar el vigilante', '130 H', 28, 11);

-- --------------------------------------------------------

--
-- Estrutura da tabela `profesor`
--

CREATE TABLE `profesor` (
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(70) NOT NULL,
  `clave` varchar(30) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `id_prof` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla que describe el profesor ';

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `correo` varchar(70) NOT NULL,
  `clave` varchar(30) NOT NULL,
  `imagen` varchar(50),
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla que describe el usuario';

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`nombre`, `apellido`, `correo`, `clave`, `id_usuario`) VALUES
('Manuel Felipe', 'SANCHEZ R', 'manuelfellip@gmail.com', '12345667', 12),
('Mariana', 'Borges', 'manuelfellip@gmail.com', '12345667', 14),
('Cristian', 'Salvador', 'cristian@gmail.com', '12345678', 15),
('Sebastian', 'Caceres', 'sebastian@gmail.com', '12345678', 16),
('Luna Colombia', 'SANCHEZ', 'luna@gmail.com', '12345678', 17),
('Ared ', 'Lopez', 'aredlopez@gmail.com', '1233455', 18);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`id_clase`);

--
-- Índices para tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id_curso`);

--
-- Índices para tabela `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id_prof`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clase`
--
ALTER TABLE `clase`
  MODIFY `id_clase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `curso`
--
ALTER TABLE `curso`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id_prof` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
