run: npm install

If running node version 7.x

then run: node --harmony-async-await gamie.js

or if running node version 8.x or above

then run: node gamie.js


Run the following command to get a simple database for testing

docker run -p 3306:3306 --name test-mariadb -e MYSQL_ROOT_PASSWORD=root -d mariadb
