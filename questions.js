var app = require('express')()

app.get('/', function (req, res) {
    res.send({
        test: true
    });
});

app.get('/1', function (req, res) {
   res.send({
       id: 1,
       body: 'question?',
       author: 'name'
   });
});

module.exports = app;