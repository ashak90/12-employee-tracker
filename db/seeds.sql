USE employee_trackerdb

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
    employees (first_name, last_name, role_id, is_manager)
VALUES
    ("Thomas", "King", 10, TRUE),
    ("Frank", "Lloyd", 6, TRUE),
    ("Randy", "Harlett", 18, FALSE),
    ("Julie", "Richards", 5, FALSE),
    ("Jared", "Lewis", 9, TRUE),
    ("Katie", "Sailor", 17, TRUE),
    ("Julia", "Long", 5, FALSE),
    ("John", "Lewis", 9, TRUE),
    ("lauren", "Banks", 17, TRUE),