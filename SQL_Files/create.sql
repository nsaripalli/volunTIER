drop schema if exists mydb;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`organization`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`organization` ;

CREATE TABLE IF NOT EXISTS `mydb`.`organization` (
  `idorganization` INT NOT NULL AUTO_INCREMENT,
  `orgname` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NULL,
  PRIMARY KEY (`idorganization`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`event`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`event` ;

CREATE TABLE IF NOT EXISTS `mydb`.`event` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `datetime` DATETIME NOT NULL,
  `est_time` BIGINT(255) NULL,
  `lat` DECIMAL(10,8) NOT NULL,
  `lon` DECIMAL(11,8) NOT NULL,
  DESCRIPTON VARCAHR(255),
  `organization_idorganization` INT NOT NULL,
  PRIMARY KEY (`event_id`, `organization_idorganization`),
  INDEX `fk_event_organization1_idx` (`organization_idorganization` ASC),
  CONSTRAINT `fk_event_organization1`
    FOREIGN KEY (`organization_idorganization`)
    REFERENCES `mydb`.`organization` (`idorganization`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`volunteer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`volunteer` ;

CREATE TABLE IF NOT EXISTS `mydb`.`volunteer` (
  `volunteer_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL unique ,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL unique ,
  `birthday` DATE NULL,
  `points` BIGINT(255) NOT NULL default 0,
  PRIMARY KEY (`volunteer_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`event_has_volunteer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`event_has_volunteer` ;

CREATE TABLE IF NOT EXISTS `mydb`.`event_has_volunteer` (
  `event_event_id` INT NOT NULL,
  `volunteer_volunteer_id` INT NOT NULL,
  `time_volunteered` INT NOT NULL,
  INDEX `fk_event_has_volunteer_volunteer1_idx` (`volunteer_volunteer_id` ASC),
  INDEX `fk_event_has_volunteer_event1_idx` (`event_event_id` ASC),
  CONSTRAINT `fk_event_has_volunteer_event1`
    FOREIGN KEY (`event_event_id`)
    REFERENCES `mydb`.`event` (`event_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_event_has_volunteer_volunteer1`
    FOREIGN KEY (`volunteer_volunteer_id`)
    REFERENCES `mydb`.`volunteer` (`volunteer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`volunteer_has_volunteer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`volunteer_has_volunteer` ;

CREATE TABLE IF NOT EXISTS `mydb`.`volunteer_has_volunteer` (
  `volunteer_id_one` INT NOT NULL,
  `volunteer_id_two` INT NOT NULL,
  INDEX `fk_volunteer_has_volunteer_volunteer2_idx` (`volunteer_id_two` ASC),
  INDEX `fk_volunteer_has_volunteer_volunteer1_idx` (`volunteer_id_one` ASC),
  CONSTRAINT `fk_volunteer_has_volunteer_volunteer1`
    FOREIGN KEY (`volunteer_id_one`)
    REFERENCES `mydb`.`volunteer` (`volunteer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_volunteer_has_volunteer_volunteer2`
    FOREIGN KEY (`volunteer_id_two`)
    REFERENCES `mydb`.`volunteer` (`volunteer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS POST;

CREATE TABLE IF NOT EXISTS POST
(
  POST_ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL ,
  TIME TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FK_EVENT_ID INT,
  FK_VOLUNTEER_ID INT NOT NULL,
  TEXT VARCHAR(255),
  CONSTRAINT EVENT_ID_POSTS
    FOREIGN KEY (FK_EVENT_ID)
    REFERENCES event (event_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT FK_VOLUNTEER_ID_POSTS
    FOREIGN KEY (FK_VOLUNTEER_ID)
      REFERENCES volunteer (volunteer_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION

);

DROP TABLE IF EXISTS COMMENTS;

CREATE TABLE IF NOT EXISTS COMMENTS (
  COMMENTS_ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  TIME TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FK_POST_ID INT NOT NULL,
  FK_VOLUNTEER_ID INT NOT NULL,
  TEXT VARCHAR(255),
  CONSTRAINT FK_POST_ID_COMMENTS
    FOREIGN KEY  (FK_POST_ID)
    REFERENCES POST (POST_ID)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  CONSTRAINT FK_VOLUNTEER_ID_COMMENTS
    FOREIGN KEY (FK_VOLUNTEER_ID)
    REFERENCES volunteer (volunteer_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


