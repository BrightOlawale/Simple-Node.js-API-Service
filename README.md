# Simple Node.js API Service

This is a simple Node.js service that provides two API endpoints: /api/comments and /api/posts. The service fetches data from jsonplaceholder.typicode.com/comments API under the hood.

## Installation
1. Clone the repository:
    ```shell
    git clone https://github.com/your-username/sample-nodejs-api.git
    ```

2. Install dependencies:
    - The following dependencies are required to run this service:
        - ```npm install express```
        - ```npm install axios```
        - ```npm install express-async-handler```
        - ```npm install dotenv```
        - ```npm install nodemon```

3. Create a `.env` file in the project root directory and set the `PORT` variable:
    ```plaintext
    PORT = 3000
    ```
    You can replace `3000` with the desired port number.

## Usage
To start the Node.js service, run the following command:
```plaintext
npm start
```
The server will start running on the specified port (default: 3000). You can access the API endpoints using the following URLs:
> GET `/api/comments`: Retrieves comments from the `jsonplaceholder.typicode.com/comments `API.
> GET `/api/posts`: Retrieves posts from the `jsonplaceholder.typicode.com/comments` API.

Both endpoints accept an optional limit query parameter to limit the number of items returned. For example:
>  `/api/comments?limit=9` will return only 9 comments.

## Error Handling
The service includes error handling using a custom error middleware. Any errors that occur during the API requests will be properly handled and returned as JSON responses with appropriate error messages.