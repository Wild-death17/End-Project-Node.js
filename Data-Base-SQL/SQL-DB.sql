CREATE TABLE `Employees` (
	`Employee_Id` INT NOT NULL AUTO_INCREMENT,
	`FirstName` VARCHAR(255) NOT NULL,
	`LastName` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`Employee_Id`)
);

CREATE TABLE `Work_Hours` (
	`Shift_Id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Employee_Id` INT NOT NULL,
	`Employee_Name` VARCHAR(255) NOT NULL,
	 `Date_in` DATE NOT NULL,
	`Clock_in` TIME NOT NULL,
	`Clock_out` TIME,
	 `Date_out` DATE,
	PRIMARY KEY (`Shift_Id`)
);

ALTER TABLE `Work_Hours` ADD CONSTRAINT `Work_Hours_fk0` FOREIGN KEY (`Employee_Id`) REFERENCES `Employees`(`Employee_Id`);