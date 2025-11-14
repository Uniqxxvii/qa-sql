DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  total NUMERIC(10,2) NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

TRUNCATE TABLE orders, users RESTART IDENTITY;

INSERT INTO users (username, email) VALUES
('alice', 'alice@example.com'),
('bob', NULL),
('carol', 'carol@example.com');

INSERT INTO orders (user_id, total, status) VALUES
(1, 100.00, 'paid'),
(1, 25.50, 'pending'),
(2, 10.00, 'cancelled'),
(3, 5.00, 'paid');
