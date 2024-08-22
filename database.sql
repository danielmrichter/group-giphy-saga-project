-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:

-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.

CREATE TABLE "favorites" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR NOT NULL,
  "category_id" INTEGER REFERENCES "categories" ON DELETE CASCADE
)

INSERT INTO "favorites" 
  ("url")
  VALUES
  ('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG16cGV4aDVhaTQ0OHcyY2QzeTA0bHV0MXpnN2d6czltZnJvN2s2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P2ofouG85BQWhXD8R8/giphy.webp'),
  ('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm05cDFyamp2OHJreHMwaGZscXZmbG10dHFnNmRwZjZwb2c4Z3F2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R6gvnAxj2ISzJdbA63/giphy.webp'),
  ('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGw4OXJnbGp5aDBvbHkzZzZtcTZwMHptdTM4dDBneGVhbTFmd3I2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MUHNdrm3vk7MoyUsCO/giphy.webp');