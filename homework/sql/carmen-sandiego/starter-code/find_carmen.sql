1 
 
 SELECT name, region, population  FROM country WHERE region='Southern Europe' ORDER BY population;

-- VATICAN CITY

SELECT language FROM countrylanguage WHERE countrycode = 'VAT';

-- ITALIAN

SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage = 100;

--SMR

SELECT name FROM city WHERE countrycode = 'SMR';
SELECT * FROM city WHERE name LIKE 'Serr%';

--SERAVAlle
--Brazil

SELECT name FROM city WHERE id = '211'; 
-- Brasï¿½lia

SELECT name, district, countrycode FROM city WHERE population = 91084;

--Santa Monica