const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");



router.get('/', (req, res) => {
    console.log('server side GET in router');
    queryText= `SELECT * from feedback;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in server side GET', error)
        res.sendStatus(500);
    })
})



router.post('/', (req, res) => {
    console.log('in feedback POST server side', req.body);
    //set req.body equal to a variable name
    const feedback = req.body;
    //set SQL text to communicate with DB
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4);`;
    //communicate with DB
    pool.query(queryText, [feedback.feelings, feedback.understanding, feedback.support, feedback.comment])
    .then(result => {
        //log of info that is sent to feedback DB
        console.log('Added new feedback to database', feedback);
        //THUMBS UP
        res.sendStatus(201);
    })
    .catch(error => {
        //error message log along with SQL query string sent
        console.log(`error making query to database ${queryText}`, error);
        //error message
        res.sendStatus(418);
    })
})




module.exports = router;


