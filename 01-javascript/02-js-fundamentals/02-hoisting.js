// 1.console.log(hello);                                   
// var hello = 'world';  
var hello;
console.log(hello);                                   
hello = 'world';  
// Predict: undefined
// Output: undefined

// 2.var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

var needle = 'haystack';
function test(){
    var needle ='magnet';
    console.log(needle);
}
test();
// Predict: 'magnet'
// Output:magnet


// 3.var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

var brendan = 'super cool';

console.log(brendan);

// Predict: super cool
// Output: super cool

// 4.var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

var food = 'chicken';
console.log(food);
function eat(){
	food = 'half-chicken';
	console.log(food);
	
}
eat();
// Prediction: chicken, half-chicken
// Output: chicken, half-chicken


// 5.mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);



var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
mean();

// Prediction: Chicken, fish without console.log(food ), with food error
// Output: Chicken, fish without console.log(food ), with food error

// 6.console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);


var genre = "disco";

function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
rewind();
console.log(genre);

// Prediction: rock, r&b, disco.
// Output: rock, r&b, disco.

// 7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

dojo = "san jose";
console.log(dojo);

function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
learn();
console.log(dojo);

// Prediction: sanjose, seattle, burbank, sanjose
// Output: sanjose, seattle, burbank, sanjose


// 8.
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
  
        var name;
        var students;
        var hiring;

        const dojo = {
          'name': name,
          'students': students,
          'hiring': hiring
        };
        
        dojo.name = name;
        dojo.students = students;
        dojo.hiring = false;

        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

// Prediction:"error"
// Output: error




