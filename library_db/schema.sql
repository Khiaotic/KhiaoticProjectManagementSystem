DROP DATABASE IF EXISTS animationpipeline_db;
CREATE DATABASE animationpipeline_db;


-- // telling sql that this is the one we want to use rn
USE animationpipeline_db; 

-- //check currently used database (inserting/deleting/etc)
SELECT DATABASE();

-- -- //ADMIN
-- CREATE TABLE  admin  (
--     adminId INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
--     adminName VARCHAR (50) NOT NULL,
--     adminpassword VARCHAR (50) NOT NULL,
--     userName VARCHAR (50) NOT NULL,
--     email VARCHAR (50) NOT NULL
-- )

-- //create the table DEPARTMENT within KMT_db
-- 
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

-- //create the roles in the department
-- roles are going to link through department id
CREATE TABLE industry_roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    role_salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- // employees
-- // employees are going to link to role id
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES industry_roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);