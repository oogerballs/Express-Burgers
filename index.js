var express = require('express');
var pug = require('pug');
var path = require('path');
var config = require('./config.json');
var app = express();

//var img = require("./Public/Assets/The_Monster.jpg");
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/Public')));

app.get('/', function (req, res) {
    res.render('index', {
        "title": "Home",
        "config": config,
        "descType" : 0
    });
});

app.get('/directions', function (req, res) {
    res.render('direction', {
        "title": req.params.name,
        "config": config,
        "descType": 1
    });
});

app.get('/:name', function (req, res) {
    var Title = req.params.name;
    var page;
    var DescType;
    if (Title == "burgers") {
        page = 0;
        DescType = 0;
    } else if (Title == "desserts") {
        page = 1;
        DescType = 1;
    } else if (Title == "sides") {
        page = 2
        DescType = 2;
    }
    res.render('pages', {
        "title": Title,
        "config": config,
        "page": page,
        "descType": DescType
    });
});

app.listen(3000);