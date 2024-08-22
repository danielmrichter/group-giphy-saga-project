const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `
  SELECT * FROM "favorites"
  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((dbErr) => {
      console.log("ERROR in get Favorites", dbErr);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const sqlText = `
  INSERT INTO "favorites"
  ("url")
  VALUES
  ($1)`;
  pool
    .query(sqlText, [req.body.url])
    .then((dbRes) => res.sendStatus(201))
    .catch((dbErr) => {
      console.log(`Error adding favorite: `, dbErr);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put("/:id", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/:id", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
