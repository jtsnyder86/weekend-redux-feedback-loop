const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `
    values = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]
    pool.query(queryText, values)
        .then(response =>{
            console.log(response)
            res.sendStatus(201)
        }).catch(err=>{
            console.log(err)
        })
})







module.exports = router