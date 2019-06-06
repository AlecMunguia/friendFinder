// dependencies
const express = require('express');

// set up express
var app = express();
var PORT = process.env.PORT || 3000;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));


























// //tables
// var tables = [
//     {
//         friendName: "Alec",
//         photo: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzNTY5NjQxOTk2/steve-buscemi-204410-1-402.jpg",
//         scores: []
//     }
// ];

// var friends = [];