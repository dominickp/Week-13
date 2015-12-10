var express = require('express');

var app = express();

// Middleware example
app.use(function(req, res, next){
    console.log("Something, middleware");
    console.log(new Date().toString() + " " + req.method + " " + req.url);
    next();
});

// CORS
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*"); // Not supposed to allow everything
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var people = [
    {id: 1, name: "Steve", twitter: "@steveyeun"},
    {id: 2, name: "Norman", twitter: "@wwwbigbaldhead"},
    {id: 3, name: "Lauren", twitter: "@LaurenCohan"},
    {id: 4, name: "Danai", twitter: "@DanaiGurira"}
];

app.get('/people', function(req, res){
    //res.send(people); // Wrapper for res.end
    res.json(people); // Wrapper for res.send
    //res.end();

});


app.get('/people/:id', function(req, res){
    var id = req.params.id;

    people.forEach(function(person){
        if(person.id == id){
            res.json(person);
        }
    });

    res.status(404).end();

});



app.listen(7000);