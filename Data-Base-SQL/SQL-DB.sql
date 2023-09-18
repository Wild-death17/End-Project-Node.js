CREATE TABLE `Employees` (
	`Employee_Id` INT NOT NULL AUTO_INCREMENT,
	`FirstName` VARCHAR(255) NOT NULL,
	`LastName` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`Employee_Id`)
);

CREATE TABLE `Work_Hours` (
	`Employee_id` INT NOT NULL UNIQUE,
	`Employee_Name` VARCHAR(255) NOT NULL,
	`Clock_in` DATE NOT NULL,
	`Clock_out` DATE NOT NULL
);

ALTER TABLE `Work_Hours` ADD CONSTRAINT `Work_Hours_fk0` FOREIGN KEY (`Employee_id`) REFERENCES `Employees`(`Employee_Id`);



