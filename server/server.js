const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
// add middleware and database connection



const app = express();
const PORT = process.env.PORT || 3001;
// add connection to apollo server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// add app get

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  // i want to see the apollo server running
});

// we will have to add the apollo server here that we will define after the local port is defined
