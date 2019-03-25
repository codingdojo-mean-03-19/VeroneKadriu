
var express = require("express");

var app = express();
var cats_data = [
	{name: "Mavreik", age: 1, favorite_food: "Mouse", sleeping_spots:"under the bed", img: "/images/cat1.jpg"}, 
	{name: "Chui", age: 4, favorite_food: "Mouse",sleeping_spots:"in the sunbeam", img: "/images/cat2.jpg"},
	{name: "Cuddles", age: 3, favorite_food: "Mouse",sleeping_spots:"outside", img: "/images/cat3.jpg"},
];
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('cats');
})


app.get('/mavreik', function(request, response){
    response.render('detalis', {cats: cats_data[0]});
});

app.get('/chui', function(request, response){
    response.render('detalis', {cats: cats_data[1]});
});

app.get('/cuddles', function(request, response){
    response.render('detalis', {cats: cats_data[2]});
});


app.listen(8000, function() {
  console.log("listening on port 8000");
})