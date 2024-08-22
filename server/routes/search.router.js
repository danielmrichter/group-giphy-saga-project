const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();

router.get(`/:id`, (req, res) => {
    let searchWord = req.params.id
    let api_key = process.env.GIPHY_API_KEY
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchWord}&limit=15`)
    .then((response) => {
        let gifList = response.data.data.map((gif)=>{return gif.images.original.url})
        // console.log('list of gif urls is:' ,gifList)
        res.send(gifList)
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;