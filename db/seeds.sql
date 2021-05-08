

INSERT INTO
    departments (name)
VALUES
    ('Engineering'),
    ('Marketing'),
    ('Sales'),
    ('Research and Development'),
    ('Human Resources');


INSERT INTO
    roles (title, salary, department_id)
VALUES
    ('Design Engineer', 110000, 1),
    ('Director of HR', 117800, 5),
    ('Director of Marketing', 177000, 2),
    ("HR Analyst", 70000, 5),
    ("HR Associate", 61700, 5),
    ("Engineering Manager", 131200, 1),
    ("Marketing Manager", 131200, 2),
    ("Sales Manager", 131200, 3),
    ("R&D Manager", 131200, 4),
    ("HR Manager", 131200, 5),
    ("Marketing Analyst", 174000, 2),
    ("Marketing Coordinator", 156900, 2),
    ("Office Assistant", 51300, 2),
    ("Office Assistant", 51300, 4),
    ("R&D Associate", 134300, 4),
    ("Sales Associate", 116300, 3),
    ("Sales Executive", 192500, 3),
    ("Senior Developer", 140600, 1),
    ("Senior Quality Engineer", 108900, 1),
    ("Structural Engineer", 98000, 1);

INSERT INTO
    employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES
    ("Marv", "Kent", 10,11, TRUE),
    ("Theodore", "Billingsly", 6,6,TRUE),
    ("Rudy", "Harlett", 18,0, FALSE),
    ("Blake", "McKernon", 5,0, FALSE),
    ("Jared", "Bastock", 9,15 TRUE),
    ("Katy", "Teasell", 17,98 TRUE),
    ("Laney", "Abbatucci", 7,23 TRUE),
    ("Elsa", "Kenrat", 8, 32,TRUE),
    ("Georgia", "Bortolini", 13,0, FALSE),
    ("Lottie", "Whybrow", 4,0, FALSE),
    ("Hermine", "Goldhill", 2,64, TRUE),
    ("Derrick", "Garr", 16,0, FALSE),
    ("Jedediah", "Benito", 12,0, FALSE),
    ("Yelena", "Negri", 15,0, FALSE),
    ("Antonetta", "Moir", 20,41, TRUE),
    ("Eleanor", "Sinclair", 5,0, FALSE),
    ("Harriet", "Bilbey", 15,0 FALSE),
    ("Loni", "Kildahl", 3,87 TRUE),
    ("Dur", "Allsobrook", 15,0, FALSE),
    ("Erica", "Rodriguez", 16,0, FALSE),
    ("Revkah", "Seamer", 14,0 FALSE),
    ("Constantin", "Duprey", 1,0 FALSE),
    ("Allyn", "Povah", 11,0 FALSE),
    ("Stefanie", "Midlar", 19,0, FALSE),
    ("Enrika", "Soaper", 16,0 FALSE);

UPDATE
    employees
SET
    manager_id = 1
WHERE
    id in (4, 10, 6);

UPDATE
    employees
SET
    manager_id = 2
WHERE
    id in (3, 22, 24);

UPDATE
    employees
SET
    manager_id = 5
WHERE
    id in (14, 17, 19, 21);

UPDATE
    employees
SET
    manager_id = 6
WHERE
    id = 2;

UPDATE
    employees
SET
    manager_id = 7
WHERE
    id in (9, 13, 23);

UPDATE
    employees
SET
    manager_id = 8
WHERE
    id in (12, 20, 25);

UPDATE
    employees
SET
    manager_id = 11
WHERE
    id = 1;

UPDATE
    employees
SET
    manager_id = 15
WHERE
    id = 8;

UPDATE
    employees
SET
    manager_id = 18
WHERE
    id = 7;

SELECT * from roles;
