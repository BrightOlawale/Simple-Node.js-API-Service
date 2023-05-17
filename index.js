const express = require('express');
const dotenv = require('dotenv').config()
const handlers = require('./handlers/allHandler');
const errorHandler = require('./middleware/errorMiddleware')

// Instantiate the application
const app = express();

// For parsing application/json
app.use(express.json());

// Service endpoint get methods
app.get('/api/comments', handlers.getComment);
app.get('/api/posts', handlers.getPost);

// Middleware to handle error;
app.use(errorHandler);

// Start App, display PROMPT in purple
app.listen(process.env.PORT, ()=> {
    console.log('\x1b[35m%s\x1b[0m', `SERVER: SERVER Running on PORT ${process.env.PORT}`);
})