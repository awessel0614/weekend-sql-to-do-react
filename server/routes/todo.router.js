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

router.post('/', (req, res) => {
    const toDo =req.body;
    const sqlText = `INSERT INTO tasklist (task)
                     VALUES ($1)`;
    pool.query(sqlText, [toDo.task])
        .then((result) => {
            console.log(`Added to do to the database`, toDo);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })

})

// PUT

// DELETE

module.exports = router;
