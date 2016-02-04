var app = require('express')()

app.get('/', function (req, res) {
    res.send({
        test: true
    });
});

app.get('/1', function (req, res) {
   res.send({
       id: 1,
       isbn: '123'
   });
});

app.get('/2', function (req, res) {
   res.send({
       id: 2,
       isbn: '456'
   });
});

module.exports = app;