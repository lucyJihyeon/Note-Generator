//import express and router method
const router = require('express').Router();
//create a notesRouter
const notesRouter = require('./notes');
//use the notesRouter when endpoint is api/notes in the request
router.use('/notes',notesRouter);
//export
module.exports = router;