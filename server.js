// Dependencies
const express = requre('express');
const path = require('path');

// set up express
var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, () +> console.log(`Now listening on port ${PORT}`));


app.get('/', (req, res) => {
    res.send('GET request successful')
});

app.use(express.urlencoded({ extended: true }));
app.use(express.jason());

//tables
var tables = [
    {
        friendName: "Alec",
        photo: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzNTY5NjQxOTk2/steve-buscemi-204410-1-402.jpg",
        scores: []
    }
];

var friends = [];