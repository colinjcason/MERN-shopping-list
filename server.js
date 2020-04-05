const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api');

const app = express();

// body-parser middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('mongoDB connected!'))
.catch(err => console.log(err));

// use rooutes
app.use('/api', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));