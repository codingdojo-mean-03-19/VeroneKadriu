// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentsFunction (array){
    for (let i in array){
        console.log('Name: ' + array[i].name + ', Cohort: ', array[i].cohort)
    }
}
studentsFunction(students);


// Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.
let users={
employees: [
    {'first_name':  'Miguel', 'last_name' : 'Jones'},
    {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
    {'first_name' : 'Nora', 'last_name' : 'Lu'},
    {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
],
managers: [
   {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
   {'first_name' : 'Gordon', 'last_name' : 'Poe'}
]
};

function usersMenagers(array){
    for(let i in users) {
        console.log(i.toUpperCase())
        for(let [nr, user] of users[i].entries()){
            nameLength = user.first_name.length + user.last_name.length;
            console.log(++nr + ' - ' + user.last_name + ', ' + user.first_name + ' - ' + nameLength);
        };
    };
};

usersMenagers(users);