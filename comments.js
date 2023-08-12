// create web server
// handle request and response
// get data from database
// send data to client
// return response to the client

// import express
const express = require('express');

// import database
const db = require('../db');

// create router
const router = express.Router();

// get all comments
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM comments';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

// get comment by id
router.get('/:id', (req, res) => {
    const sql = `SELECT * FROM comments WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result[0]);
    })
})

// create new comment
router.post('/', (req, res) => {
    const sql = `INSERT INTO comments (comment, post_id) VALUES ('${req.body.comment}', ${req.body.post_id})`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

// update comment
router.put('/:id', (req, res) => {
    const sql = `UPDATE comments SET comment = '${req.body.comment}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

// delete comment
router.delete('/:id', (req, res) => {
    const sql = `DELETE FROM comments WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

module.exports = router;

