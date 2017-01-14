const express = require('express');
const app = express();
const controller = require('./controllers');
const router = require('express').Router();

app.use(parser.json());
app.use('/', router);

// Handle requests to endpoints
router.get('/messages', controller.messages.get);

// Start the server
const server = app.listen(8000, () => {
  const port = server.address().port;
  console.log('Listening on port', port);
});

// Export the server
module.exports = server;
