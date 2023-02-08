-- ///get all departments  
SELECT * FROM departments;

-- ////get all roles 
SELECT * FROM industry_roles;


-- ////get all employees 
SELECT * FROM employees;

-- ////insert into a department /////value taken   from user 
INSERT INTO departments (name) Values ('Animation');


-- ////add a role, name, salary, and department it belongs to
INSERT INTO industry_roles (title, role_salary, department_id) VALUES ('Animator', 50000, 4);


-- ////add employeeeeeeeeee
NSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Mhi', 'Marner', 7, 1);