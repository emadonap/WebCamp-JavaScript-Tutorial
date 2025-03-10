// window.alert('I really love Tech!');
// this is a single line comment
/* this is a multi-line comment */

// Variables
// var name = 'John Doe';

/* VARIABLES IN JAVASCRIPT
    A variable is a container used for storing signle data.

    Two steps in naming a variable in Javascript:

    1. Declaration (var, let, const);
    2. Assignment (= assignment operator)
    
    String, Numbers, Boolen, Null, undefined
*/

let myname = 'John Doe';
const firstname = 'John'; //strings data type
let ages = "30"; //strings data type
var age = 30; //number data type
var age = 21; //number data type (integer)
var count = 22.1; //number data type (float)
let isMarried = true; //boolean data type
let children = null; //null data type
let car; //undefined data type

console.log(myname);
console.log(firstname);
console.log(age);
console.log(count);

age = age + 20;
ages = ages + 15;

console.log(age);
console.log(ages);

/* 
    Arithmetic Operators in Javascript
    + addition
    - subtraction
    * multiplication
    / division
    % modulus
    ++ increment
    -- decrement
    It is used to perform arithmetic operations on numbers.
    It is a combination of...
    operands (variables, values, or literals etc.)
    Operators (+, -, *, /, %, ++, --)
    that can be evaluated to a value.
    ex. y = x + 5;
*/

let students = 30;

let math1 = students + 5;
let math2 = students - 3;
let math3 = students * 6;
let math4 = students / 4;
let extraStudents = students % 5;

console.log(math1);
console.log(math2);
console.log(math3);
console.log(math4);
console.log(extraStudents);

students += 1; // means students = students + 1;
students -= 1; // means students = students - 1;
students *= 1; // means students = students * 1;
students /= 1; // means students = students / 1;
students %= 1; // means students = students % 1;

/* 
    CONCATENATION IN JAVA SCRIPT
    Concatenation is the process of joining/method/way two or more strings/Variables together.
    It is done using the + operator.
*/

const firstnamez = 'Emmanuel';
const agez = 40;
const paragraph = 'My name is ' + firstnamez + ' and I am ' + agez + ' years old.';
console.log(paragraph);

// Template String
console.log(`My name is ${firstnamez} and I am ${agez} years old.`);

const hello = `My name ${firstnamez} and I am ${agez} years old.`;

console.log(hello);

/* 
    STRING FUNCTIONS IN JAVASCRIPT
    String functions are functions that are used to manipulate strings in JavaScript.
*/

let stringLetter = 'Hello World';

console.log(stringLetter.length); // length of the string
console.log(stringLetter.toLowerCase()); // convert string to lowercase
console.log(stringLetter.toUpperCase()); // convert string to uppercase
console.log(stringLetter.substring(0, 5).toUpperCase()); // get the substring of the string
console.log(stringLetter.charAt(0)); // get the character at the specified index
console.log(stringLetter.indexOf('W')); // get the index of the specified character

/* ARRAYS
    Arrays are variables that hold multiple values.
    An array is a special variable, which can hold more than one value at a time.
*/

new Array(); // array constructor
[]

const numbers = new Array(1,2,3,4,5,6)

const multipleDatatype = ['hello','banana', 2, false]

console.log(numbers);

const fruits = ['apple', 'orange', 'grape', 'banana'];

fruits[4] = 'pear'; // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear'];

// HOW TO ADD ITEMS INSIDE YOUR ARRAY
// push() adds items at the end of the array while unshift() adds items at the beginning of the array.

fruits.push('mangos'); // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear', 'mangos'];

fruits.unshift('strawberry'); // const fruits = ['strawberry', 'apple', 'orange', 'grape', 'banana', 'pear', 'mangos'];


// HOW TO REMOVE ITEMS INSIDE YOUR ARRAY
// pop() removes items at the end of the array while shift() removes items at the beginning of the array.

fruits.pop(); // const fruits = ['strawberry', 'apple', 'orange', 'grape', 'banana', 'pear'];
fruits.shift(); // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear'];

console.log(fruits);

//Arrays are zero-based
console.log(fruits[0]); // apple
console.log(fruits[1]); // orange
console.log(fruits[2]); // grape
console.log(fruits[3]); // banana
console.log(fruits[4]); // pear

// CLASSWORK

const animals = ['kangaroo', 'Antelop', 'Mongoose', 'Ostritch', 'Gorilla'];

console.log(animals[1]);
animals.unshift('Lion');
animals.push('Zebra');
console.log(animals);
/*
    Questions:

    1. Output the second item of the array on your console.
    2. Add 'Lion' to the beginning of the array.
    3. Add 'Zebra' to the end of the array.
    4. Output the values of animals array on your console.
*/

//OBJECTS IN JAVASCRIPT
const person = {
    firstName: 'John',
    lastName: 'Doe',
    Age: 30,


    hobies: ['music', 'movies', 'sports'],

    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    }
}

//DESTRUCTURING, is the pulling of variables or values from an object. example

const { firstName, LastName, address: { state, city }} = person;

console.log(lastName);

// OR

//How to access or get variables in an object in Javascript
console.log(person.firstName, person.lastName);

//How to access or get value of array in an object in Javascript
console.log(person.hobbies[1]);

//How to access or get value of object in an object in Javascript
console.log(person.address.city);

person.email = 'emadonap@gmail.com';

console.log(person);

//Arrays of object
const NavBarList = [
    {
        id: '1',
        name: 'Home'
    },
    {
        id: '2',
        name: 'About Us'
    },
    {
        id: '3',
        name: 'Service'
    },
    {
        id: '4',
        named: 'Contact Us'
    }
]

//LOOPS IN JAVASCRIPT

//TYPES OF LOOPS

// 1. FOR LOOP
/*
    For Loop, it takes 3 parameters: first is the initializer, second is the condition to be met, third is the increment
*/

const basket = ['mango', 'apple', 'orange', 'grape'];

for(let m = 0; m < basket.length; m++){

    console.log(basket[m]);

}

// CLASSWORK

// Use for loop to output the values of Array i.e wildAnimals in your console

let wildAnimals = ['lion', 'tiger', 'python', 'wolve', 'leopard'];

// 2. While loop (old school)
let i = 0;
while (i < wildAnimals.length) {
    console.log(wildAnimals[i]);
    i++;
}

const todoss = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'TMeeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    },
]

// 3. For of loop in JAVASCRIPT

for (let daniel of todoss) {
    console.log(daniel.id);
    console.log(daniel.text);
}

// 4. ForEach

todoss.forEach(daniels => {
    console.log(daniels.text);
});

todoss.forEach(function(todo){
    console.log(todo.id);
});

// 5. Map
todoss.map(function(todo){
    console.log(todo.text);
})

// Filter
const todoCompleted = todoss.filter(function(todo){
    return todo.isCompleted === true;

}).map(function(todo){

    return todo.text;

})

console.log(todoCompleted);

// == & ===

// If Statement in JAVASCRIPT

const ipAddress_Nigeria = 112324;
const ipAddress_USA = 223445;

if (ipAddress_Nigeria = 112324){
    console.log('welcome to our website');
}else{
    console.log('does not support your country');
}

let x = 20;

if(x === 10){
    console.log('x is 10');

}else if (x > 10){
    console.log('x is greater than 10');
}else{
    console.log('x is less than 10');
}

const y = 4;
const z = 10;

if (y > 5 || z > 9){
    console.log('y is more than 5 or z is more than 10');
}

if (y > 5 && z > 9){
    console.log('y is more than 5 or z is more than 10');
}

//tenary operators, is like a shorthand IF statement, it is used to assign variable based on condition
const agesGrade = 17;

const output = agesGrade >= 18 ? 'red' : 'blue';
console.log(output);

//SWITCH STATEMENT
let CarColor = 'purple';

switch(CarColor){
    case 'red':
        console.log('color is red');
        break;

    case 'blue':
        console.log('color is blue');
        break;

    default:
        console.log('color is NOT red or blue')

}

// FUNCTIONS

//Normal Function

function goodmorning(){
    console.log('Good morning Dear')
}
goodmorning();

function lesi(){
    console.log('Lesi is a software developer')
}
lesi();

function Eben(){
    console.log('Eben is a software developer')
}
Eben();

Racheal();

let word = 'Racheal is learning how to use function in javascript';

function Racheal(){
    console.log(word);
}

function OutPutHello(){
    console.log('Hello');
}
OutPutHello();

// How to write Arrow Function

let currentLocation = ()=>{

}
currentLocation();

let lesii = () =>{

}
lesii();

const precious = () =>{
    console.log('Precious is learning how to use arrow function in javascript');
}
precious();

function shalom(a = 6, b = 3, c = 4){

    let sumTotal = a + b + c;
    console.log(sumTotal);
}
shalom();

//A function that adds two numbers
function addNum(num1, num2, emeka){
    console.log(num1 + num2 + emeka);
}

addNum(5, 6, 9);

//DOM Document Object Model
//DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

//Single Element Selector
let form = document.getElementById('my-form');
console.log(form);

let Newform = document.querySelector('h1');
console.log(Newform);