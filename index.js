var express = require('express');
var app = express();


app.use('/books', require('./books'));
app.use('/courses', require('./courses'));
app.use('/questions', require('./questions'));

app.listen(3000);