CREATE TABLE IF NOT EXISTS user_managament.users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS user_managament.privileges (
    privilege_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS user_managament.user_privileges (
    user_id INT,
    privilege_id INT,
    FOREIGN KEY (user_id) REFERENCES user_managament.users(user_id),
    FOREIGN KEY (privilege_id) REFERENCES user_managament.privileges(privilege_id)
);
SELECT *
FROM user_managament.users;
SELECT *
FROM user_managament.privileges;
SELECT *
FROM user_managament.user_privileges