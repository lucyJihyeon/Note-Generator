const express = require('express');
const path = require('path');
//const api = require('./routes/index');

const PORT = process.env.port || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//app.use('/api', api);
app.use(express.static('public'));

//GET route for note page
app.get('/notes', (req,res)  =>  
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

//catch all route to serve index.html for any path.
app.get('*', (req, res) =>  
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>
    console.log(`APP Listening at http://localhost:${PORT}`)
);