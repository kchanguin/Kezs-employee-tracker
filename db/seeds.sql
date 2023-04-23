INSERT INTP departments (department_name)
VALUES
('Accounting')
('Administrative Support')
('Finance')
('Legal')
('Marketing and Creative Studio')
('Technology')
('Human Resources')
('Maintenance')
('Executive Member Board')
('Research and Development');

INSERT INTO roles (title, salary, department_id)
VALUES
('Senior Accountant', 85000, 1'),
('Administrative Assistant', 65000, 2'), 
('Financial Manager Senior', 198227, 3'),
('Lead Attorney', 280000, 4'),
('Lead Marketing Manager, 100000, 5'),
('Lead Software Engineer, 120000, 6'),
('Human Resources Manager Senior, 95000, 7'),
('Maintenance Technician, 45000, 8'),
('Chief Executive Officer, 750000, 9'),
('Research and Development Manager Senior, 175000, 10')

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Giyu', 'Tomioka', 01, 1),
('Toph', 'Beifong', 02, 2),
('Kakashi', 'Hatake', 03, 3),
('Uzui', 'Tengen', 04, 4),
('Tanjiro', 'Chan', 05, 5),
('Zenitsu', 'Agatsuma', 06, 6),
('Inosuke', 'Hashibira', 07, 7),
('Nezuko', 'Chan', 08, 8),
('Gojo', 'Satoru', 09, 9),
('Light', 'Yagami', 10, 10);



