CREATE SCHEMA `registro` DEFAULT CHARACTER SET utf8mb4 ;
USE registro;
CREATE TABLE `registro`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(255) NULL,
  `pass` VARCHAR(255) NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;