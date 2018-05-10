DROP DATABASE IF EXISTS event_manager;
CREATE DATABASE `event_manager`
DEFAULT CHARSET=utf8 COLLATE utf8_general_ci;

CREATE TABLE `event_manager`.`user` (
  `id` VARCHAR(11) NOT NULL ,
  `mail` VARCHAR(254) NOT NULL ,
  `pseudo` VARCHAR(64) NOT NULL ,
  `password` VARCHAR(64) NOT NULL ,
  `role` VARCHAR(64) NOT NULL , 
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`(11))
 ) ENGINE = InnoDB;

  CREATE TABLE `event_manager`.`events` (
    `id` VARCHAR(11) NOT NULL ,
    `title` VARCHAR(64) NOT NULL ,
    `date` DATE NOT NULL ,
    `hours` VARCHAR(64) NOT NULL ,
    `address` VARCHAR(254) NOT NULL ,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (`id`(11))
  ) ENGINE = InnoDB;


































   -- DROP DATABASE IF EXISTS event_manager;
   -- CREATE DATABASE event_manager;
   -- USE event_manager;
   --
   -- CREATE TABLE user (
   --
   --   id VARCHAR(11),
   --   mail VARCHAR(254),
   --   pseudo VARCHAR(64),
   --   password VARCHAR(64)
   --   role
   --
   -- )
   --
   --
   -- CREATE TABLE event (
   --
   --   id VARCHAR(11),
   --   title VARCHAR(64),
   --   dates DATE,
   --   hours VARCHAR(64),
   --   address VARCHAR(254),
   --   createdAt TIMESTAMP
   --
   -- )
