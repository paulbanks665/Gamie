CREATE TABLE game ( id int not null auto_increment primary key, name varchar(50) not null, players int,type varchar(20)) character set utf8;
INSERT INTO game (name,players,type) VALUES ('Youve got crabs', 10, 'Card');
INSERT INTO game (name,players,type) VALUES ('Exploding Kittens', 5, 'Card');
INSERT INTO game (name,players,type) VALUES ('Star Wars Legion', 10, 'Minitues');