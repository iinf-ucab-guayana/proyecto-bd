-- Creacion de la base de datos
--   la realiza la aplicación

---- bonito
-- CREATE TABLE IF NOT EXISTS `tesistas` (
--   `cedulaT` INT NOT NULL AUTO_INCREMENT,
--   `nombreT` VARCHAR(255) NOT NULL,
--   `correoT` VARCHAR(255),
--   `correopT` VARCHAR(255),
--   `direccionT` VARCHAR(255),
--   PRIMARY KEY (`cedulaT`),
-- ) ENGINE = InnoDB;
---- en linea
CREATE TABLE IF NOT EXISTS `tesistas` ( `cedulaT` INT NOT NULL AUTO_INCREMENT, `nombreT` VARCHAR(255) UNIQUE NOT NULL, `correoT` VARCHAR(255), `correopT` VARCHAR(255), `direccionT` VARCHAR(255), PRIMARY KEY (`cedulaT`) ) ENGINE = InnoDB;
