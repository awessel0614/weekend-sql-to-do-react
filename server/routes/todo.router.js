const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {

    let queryText = 'SELECT * from "tasklist" ORDER BY "id" ASC;';
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.error('ERROR IN GET /items', error);
            res.sendStatus(500);
        });
})


// POST

// PUT

// DELETE

module.exports = router;
