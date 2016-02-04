var app = require('express')()

app.get('/', function (req, res) {
    res.send({
        test: true
    });
});

app.get('/1', function (req, res) {
   res.send({
       id: 1,
       course_num: '304',
       subject: 'compsci'
   });
});

module.exports = app;