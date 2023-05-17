// Description: Endpoint handler function

const express = require('express');
const axios = require('axios');
const asyncHandler = require('express-async-handler');
const handleError = require('./errorHandler');

// General handler container
handlers = {};

// The URL for the data
const endpointURL = `https://jsonplaceholder.typicode.com`;

// Function to get comments
handlers.getComment = asyncHandler( async(req, res) => {
    // Check if limit query is passed
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    // Retrieve comments endpoint using the parsed limit
    const commentsUrl = `${endpointURL}/comments?_limit=${limit}`;

    // Use axios to feth the data
    const response = await axios.get(commentsUrl);

    // Throw error with status code 500 if data couldn't be fetched
    handleError(res, response, endpointURL, 'comments');

    res.status(200).json(response.data);
})

// Function to get posts
handlers.getPost = asyncHandler(async (req, res) => {
    // Check if limit query is passed
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;

    // Retrieve posts endpoint using the parsed limit
    const postsUrl = `${endpointURL}/posts?_limit=${limit}`;

    // Fetch the data using axios
    const response = await axios.get(postsUrl);

    // Thrown error with satus code 500 if data couldn't be fetched
    handleError(res, response, endpointURL, 'posts');

    res.status(200).json(response.data);
})

// Export container 
module.exports = handlers;