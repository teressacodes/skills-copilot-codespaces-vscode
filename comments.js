// Create web server
// npm install express
// npm install body-parser
// npm install ejs
// npm install mongoose
// npm install method-override

// 1. Require necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// 2. Create a new express app
const app = express();

// 3. Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// 4. Set up ejs
app.set('view engine', 'ejs');

// 5. Set up method-override
app.use(methodOverride('_method'));

// 6. Connect to mongoose
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

// 7. Create a mongoose schema
const commentSchema = new mongoose.Schema({
    text: String, 
});