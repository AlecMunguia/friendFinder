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