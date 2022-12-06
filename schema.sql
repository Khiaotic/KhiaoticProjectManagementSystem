DROP DATABASE IF EXISTS khiaoticmanagementtest_db;
CREATE DATABASE khiaoticmanagementtest_db;


-- // telling sql that this is the one we want to use rn
USE khiaoticmanagementtest_db; 

-- //check currently used database (inserting/deleting/etc)
SELECT DATABASE();

-- //create the table DEPARTMENT within KMT_db
-- 
CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR (100) NOT NULL
)