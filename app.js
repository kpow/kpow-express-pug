const express = require('express');
const path = require('path');
const data = require('./data.json');
const {projects} = data;

// use standard node convention for our base express instance
const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

// now we need to load out routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');

// tell the app to use these routes
app.use(mainRoutes);
// set the card routes base url for the route
app.use(['/project','/projects'], projectRoutes);

// start the entire app
app.listen(3901, () => {
    console.log('The application is running on localhost:3900!');
});