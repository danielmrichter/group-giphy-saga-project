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
  const sqlText = `
  UPDATE "favorites"
 	  SET "category_id" = $1
  	WHERE "id" = $2;`;
  const sqlValues = [req.body.category, req.body.id];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => res.sendStatus(200))
    .catch((dbErr) => {
      console.log(`Error in PUT/api/favorites! `, dbErr);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/:id", (req, res) => {
  const sqlText = `
  DELETE FROM "favorites"
    WHERE "id" = $1`;
  pool
    .query(sqlText, req.params.id)
    .then((dbRes) => res.sendStatus(200))
    .catch((dbErr) => {
      console.log(`Error Deleting favorite! `, dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;
