INSERT INTO departments (name)
VALUES ('Production Management'),
    ('Development'),
    ('Pre-production'),
    ('Production'),
    ('Post-production'),
    ('Distrubution');

INSERT INTO industry_roles (title, role_salary, department_id)
VALUES ('Coordinator', 50000, 1),
    ('Developer', 60000, 2),
    ('Pre-Producer', 70000, 3),
    ('Productionist', 550000, 4),
    ('Post-Producer', 70000, 5),
    ('Distrbutor', 90000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Khi', 'Warner', 1, NULL),
('Bhi', 'Qarner', 1, NULL),
('Chi', 'Garner', 2, NULL),
('Ghi', 'Farner', 3, 2),
('Lhi', 'Darner', 4, NULL),
('Yhi', 'Tarner', 5, 1);
    