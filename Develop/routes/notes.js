//import express and Router method 
const notes = require('express').Router();
//Deconstruct readFromFile ad readAndAppend methods from fsUtils file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
//import uuid to create a unique id
const { v4: uuidv4 } = require('uuid');

//GET route for retrieving db.json data
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

