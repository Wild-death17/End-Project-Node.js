CREATE TABLE `Employees` (
	`Employee_Id` INT NOT NULL AUTO_INCREMENT,
	`FirstName` VARCHAR(255) NOT NULL,
	`LastName` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`Employee_Id`)
);

CREATE TABLE `Work_Hours` (
	`Shift_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Employee_id` INT NOT NULL,
	`Employee_Name` VARCHAR(255) NOT NULL,
	`Clock_in` TIME NOT NULL,
	`Clock_out` TIME,
	PRIMARY KEY (`Shift_id`)
);

ALTER TABLE `Work_Hours` ADD CONSTRAINT `Work_Hours_fk0` FOREIGN KEY (`Employee_id`) REFERENCES `Employees`(`Employee_Id`);