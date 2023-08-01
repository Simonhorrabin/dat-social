import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Define your route handler function
const apiHandler = (req, res, next) => {
    res.send("Hello World");
}

// Use the route handler for requests to '/api'
app.use("/api", apiHandler);

mongoose.connect(
    'mongodb+srv://simonhorrabin:tIV8evZR7y9n5uwv@cluster0.0lmyuki.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to Database");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log(err));
