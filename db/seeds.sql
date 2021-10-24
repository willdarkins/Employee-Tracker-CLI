INSERT INTO department (id, name)
VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'Saleslead', 75000, 1),
(2, 'Salesperson', 50000, 1),
(3, 'Lead Engineer', 100000, 2),
(4, 'Software Engineer', 60000, 2),
(5, 'Account Manager', 80000, 3),
(6, 'Accountant', 60000, 3),
(7, 'Legal Team Lead', 110000, 4),
(8, 'Lawyer', 100000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Roger', 'Federer', 1),
(2, 'Rafael', 'Nadal', 3),
(3, 'Novak', 'Djokovic', 7),
(4, 'Andy', 'Murray', 5),
(5, 'Daniil', 'Medvedev', 8, 3),
(6, 'Stefanos', 'Tsitsipas', 8, 3),
(7, 'Alexander', 'Zverev', 4, 2),
(8, 'Dominic', 'Thiem', 4, 2),
(9, 'Gael', 'Monfils', 2, 1),
(10, 'Grigor', 'Dimitrov', 2, 1),
(11, 'John', 'Isner', 6, 4);