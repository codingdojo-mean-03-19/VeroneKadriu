// 1.
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// number was assigned to a string type. changed number to string.
myString = "nine";

// 2.
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // number was assigned to a string type, number changed to string by quote.
 console.log(sayHello("9"));

//  3.
function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // if someone doesn't have a middle name, just need to give an empty string.
 console.log(fullName("Jimbo", "Jones", ""));

//  4.
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // it was written as belt.
 console.log(graduate(jay));

//  5.
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // made an instance of Ninja, for turing:
 const turing = new Ninja("Alan", "Turing");
 // Since the above is success, we don`t need the following:
//  const turing = {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
//  }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this problem has been fixed:
 console.log(study(turing));

//  6.
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
console.log(square(4));
// parentheses around the x and y.
var multiply = (x,y) => x * y;
// curly brackets after the arrow.
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

// 7. 
// birthday changed 
class Elephant {
    constructor(public age: number){}
    birthday = () => {
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)// 1.
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// number was assigned to a string type. changed number to string.
myString = "nine";

// 2.
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // number was assigned to a string type, number changed to string by quote.
 console.log(sayHello("9"));

//  3.
function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // if someone doesn't have a middle name, just need to give an empty string.
 console.log(fullName("Jimbo", "Jones", ""));

//  4.
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // it was written as belt.
 console.log(graduate(jay));

//  5.
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // made an instance of Ninja, for turing:
 const turing = new Ninja("Alan", "Turing");
 // Since the above is success, we don`t need the following:
//  const turing = {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
//  }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this problem has been fixed:
 console.log(study(turing));

//  6.
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
console.log(square(4));
// parentheses around the x and y.
var multiply = (x,y) => x * y;
// curly brackets after the arrow.
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

// 7. 
// birthday changed 
class Elephant {
    constructor(public age: number){}
    birthday = () => {
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)