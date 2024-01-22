//import express and Router method 
const notes = require('express').Router();
//Deconstruct readFromFile ad readAndAppend methods from fsUtils file
const { readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
//import uuid to create a unique id
const { v4: uuidv4 } = require('uuid');

//GET route for retrieving db.json data
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST route for creating a new note
notes.post('/', (req,res) => {
    //Deconstructing assignment for the items in req.body
    const { title, text } = req.body;
    //if all of the required properties are in the req.body, create a new note
    if ( title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        //updating db.json by appending the newly created note
        readAndAppend(newNote, './db/db.json');
        //create a new response object with a status 
        const response = {
            status: 'success',
            body: newNote,
        };
        //send it as a response
        res.json(response);
    } else {
        res.json('Error in posing a new note');
    }
});

notes.delete('/:id', (req,res) => {
    const idToDelete = req.params.id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((notes) => {
        const updatedNotes = notes.filter((note) => note.id !== idToDelete);
        writeToFile('./db/db.json', updatedNotes);

        const response = {
            status: 'success',
            body: updatedNotes,
        };
        res.json(response);
    })
    .catch((error) => {
        console.error(error);
        res.json("Error deleting the note");
    });
});
//exporting notes router.
module.exports = notes;
