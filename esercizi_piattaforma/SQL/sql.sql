CREATE TABLE Books (
    book_id SERIAL NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT,
    published_year INT,
    isbn INT,
    price FLOAT,
    rating, FLOAT,
    stock_count, INT
);

ALTER TABLE Books ADD (
    publisher TEXT,
    pages INT
);

INSERT INTO Books VALUES ('A Journey to the Center', 'Jules Verne' , 'Adventure', 1864, 1234567890123, 12.99, 4.5, 10, 'Verne Publishing', 350);
INSERT INTO Books VALUES ('War and Peace', 'Leo Tolstoy' , 'Historical', 1869, 1234567890124, 14.99, 4.8, 5, 'Tolstoy Prints', 1200);
INSERT INTO Books VALUES ('Whispers of the Wind', 'Amelia Blackburn' , 'Romance', 1982, 1234567890125, 9.99, 4.2, 20, 'Blackburn House', 275);
INSERT INTO Books VALUES ('The Galactic Odyssey', 'Orion Starfield' , 'Science Fiction', 2005, 1234567890126, 19.99, 4.9, 15, 'Nebula Press', 450);

UPDATE Books SET stock_count = 1199 WHERE book_id = 2;

GRANT SELECT UPDATE ON Books TO 'martin'@'localhost';

REVOKE UPDATE ON Books TO 'martin'@'localhost';

BEGIN TRANSACTION;
DELETE FROM Books WHERE book_id = 1;
COMMIT;

BEGIN TRANSACTION;
DELETE FROM Books WHERE book_id = 2;
ROLLBACK;