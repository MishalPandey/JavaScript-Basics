/* //First Video

console.log("Hello World!!");
//console.log("Hello Worldddd!!");
document.getElementById('name').innerText ="Mishal";

document.getElementById('changeName').onclick = function()
{
    document.getElementById('name').innerText ="Mishal Again";
    document.getElementById('name').style.background= 'red';
    document.getElementById('name').style.color= 'white'; 

}
    */

//variable name should be start with letters, $, _ only and its case sensitive
let count =4;
count = 5;
console.log(count);

// var is the older way to create variable now we are using let and const
var countt = 6;
countt =7;
console.log(count);

//let is used for re-asigning the value or it will be changed during execution
let counttt =9;
counttt = 10;
console.log(counttt);

const Count =4;
//Count = 5; we can not do this
console.log(Count);

//Primitive Data Type
//Numbers : Represents both integer and floating point numbers
//Strings : Represents sequence of characters -single quote and double quote dono se assign kar sakte
//Boolean: Represes ts true or false
//Undefined: No value assigned
//Null: Represents intentional absence of value
//yaha let se hi sare define hite alag alag nahi hote

//Numbers
let age = 70.5;
console.log(typeof age);
console.log(age);

//Strings
let name = "John";
console.log(typeof name);
console.log(name);

let city = 'San Jose';
console.log(typeof city);

console.log(name + " " + city);
//Boolean
let hasGraduated = true;
console.log(typeof hasGraduated);

//Undifined
let area; 
console.log(typeof area);

//Null: Represents intentional absence of value
let emptyValue = null;
console.log( emptyValue);

//Reference types
// object: Used to store complex data in form of key value pairs

let userAge = 22;
let userName= 'Mishal';

let user = {
    name: 'Mishal',
    age: 22
}
console.log(user);
console.log(typeof user);
console.log(user.name);
console.log(user.age);
user.name = 'Alice';
console.log(user.name);

//Array: Used to hold multiple values
let fruit = ["Apple", "Banana", "strwaberry"]
console.log( fruit);
console.log(typeof fruit);

// STATICALLY TYPED lANGUAGE EXAMPLE: Java
// variables cannot change their type during 
// the program's execution 

// int age = 30;
//age = "Java"; will give error

// DYNAMICALLY TYPED lANGUAGE EXAMPLE: JAVASCRIPT
// variables can change their type during 
// the program's execution 

let myVariable;
console.log(typeof myVariable);

myVariable = 1;
console.log(typeof myVariable);
console.log( myVariable);

myVariable = "Mishal";
console.log(typeof myVariable);
console.log(myVariable);

// EXPRESSION
// An expression in javaScript is any valid
// unit of code that produces a value
 let a = 30; //expression
 let ab = true; //expression

// LITERAL
// A literal is a fixed value that you write 
// directly in the code
// 30 , true

// OPERATORS
// operator in JavaScript are symbols that
// perform operations on operands.
// + / - *

//similar to java - OPERATORSSSSSSS all similar
//just conditional operator

//Equality (==)
let x = 5;
let y = 5;
console.log(5 == 6); //false
console.log(x == y); // true

console.log(typeof '6'); //string
console.log( 5 == '5'); //true, only value check after conversion

// Strict equality (===)
console.log( 5 === '5');  // false
console.log( '5' === '5'); // true, type and value check

// Inequality (!=)
console.log(3 != 3); //false
console.log(3 != '3'); //false, only value check after conversion

//strict inequality(!==)
console.log(3 !== '3'); //true, type and value check

//others are similar to java
console.log((5 > 3) && (5 > 6));

//Ternary Operation
let xx = 10;
let message = ( xx > 5 ? "xx is > 5" : "xx is < 5");
console.log(message);

let number = 4;
let result = (number % 2 ===0) ? "even" : "odd";
console.log(result);

//Nested Ternary Operator
//age < 13 ->child
//age 13-20 -> teenager
//age > 20 ->adult

let agee = 22;
let category = (age < 13) ? "child" :
                (age < 20) ? "Teenager" : "Adult";
console.log(category);

let fruitt = ["Apple", "Banana", "strwaberry"]
console.log( fruitt);
console.log( fruitt[0]);
console.log( fruitt[1]);
console.log(typeof fruitt);

fruitt[1] = "cherry";
console.log( fruitt);

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[0]);
console.log(matrix[0][0]);

/*
push(): Adds an element to the end.
pop(): Removes the last element.
shift(): Removes the first element.
unshift(): adds an element to the beginning.
slice(): copies a portion of an array
splice(): adds or removes element at a specific index

*/
fruitt.push("kela");
console.log(fruitt.length);
fruitt.pop();
console.log(fruitt);

let shiffft = fruitt.shift();
console.log(fruitt);

let unshiffft =fruitt.unshift("kela");
fruitt.unshift("bela");
console.log(fruitt); // ['bela', 'kela', 'cherry', 'strwaberry']

let slicedArray = fruitt.slice(1,3);
console.log(slicedArray); // ['kela', 'cherry']
console.log(fruitt); // ['bela', 'kela', 'cherry', 'strwaberry']

fruitt.splice(1,2);
console.log(fruitt); //['bela', 'strwaberry']

fruitt = ["Apple", "Banana", "strwaberry", "hela"]
let deletdItems = fruitt.splice(1,2, "Mishal")
console.log(fruitt); // ['Apple', 'Mishal', 'hela']
console.log(deletdItems); // ['Banana', 'strwaberry']

/*
JavaScript Objects

Objects allow you to group related data and
 function together.

An Object is created using curly braces '{}'
and contains ket-value pairs, where each key 
(also called a property) is associated with a value

*/

let person = {
     name: "alice",
     age: 25,
     isStudent: true
}

console.log(person);

//Accessing Properties
console.log(person.age);
console.log(person["age"]); //aise bhi access karte

//Adding or Updating properties
person.age = 30;
console.log(person);

person.job = "engineer";
console.log(person);

// Deleting Properties
delete person.isStudent;
console.log(person);

//check if property exist
console.log('name' in person);
console.log(person.hasOwnProperty("age"));


// Nested Objects
let student = {
    namee: "bob",
    courses : {
        math: true,
        science: false
    }
}

console.log(student);
console.log(student.courses.math);

// Object Destructuring

let {namee, courses} = student; //this namee and courses should be similar name to student namee and courses
console.log(namee);
console.log(courses);

/*
Type Conversion 
- Javascript is a loosely typed language
- javascript supports impicit and explicit conversion

*/
let example1 = 5 + 1;
console.log(example1); // output 6
console.log(typeof example1);
console.log("Hi" + "Hello"); // output HiHello 
//Means + operator is doing addition as well as concatination
//But - operator will only do subtraction
//similarly for * ,, ,, ,,


let xxx = '5' + 1; // will do like '5' + '1'
console.log(xxx) //output 51
console.log(typeof xxx) //string


let example2 = '5' - 1; // will do like 5 - 1
console.log(example2); //output 4
console.log(typeof example2); //number

let example3 = '5' * 1; // will do like 5 * 1
console.log(example3); //output 4
console.log(typeof example3); //number

let example4 = true + 1; // will do like 1 + 1
console.log(example4); //output 2
console.log(typeof example4); //number

let example5 = false + 1; // will do like 0 + 1
console.log(example5); //output 1
console.log(typeof example5); //number

// converting values explicitely

// toString(), String()
let num = 123;
let bool = true;

let numToString = String(num);
console.log(numToString, typeof numToString);

let boolToString = String(bool);
console.log(boolToString, typeof boolToString);

let numToString1 = num.toString();
console.log(numToString1, typeof numToString1);

let boolToString1 = bool.toString();
console.log(boolToString, typeof boolToString);

// Number(), parseInt(), parseFloat()
let strNum = "456";
let strFloat = "12.55";

let strToNum = Number(strNum);  
console.log(strNum, typeof strNum);//456 number

let strToInt = parseInt(strNum);  
console.log(strToInt, typeof strToInt);//456 number

let strToFloat = parseInt(strFloat );  
console.log(strToFloat, typeof strToFloat);//12 number

let strToFloatt = parseFloat(strFloat );  
console.log(strToFloatt, typeof strToFloatt);//12.55 number

let invalidNum = Number("hello");  
console.log(invalidNum, typeof invalidNum);//NaN number



//Boolean

let zero = 156;
let zeroo =0; // or = "", NaN, null ----it will give false boolean
let nonEmptyString = "Hello"; 

let zeroToBoolean = Boolean(zero);
console.log(zeroToBoolean, typeof zeroToBoolean); // true boolean
let zeroToBooleann = Boolean(zeroo);
console.log(zeroToBooleann, typeof zeroToBooleann); // false boolean

let strToBoolean = Boolean(nonEmptyString);
console.log(strToBoolean, typeof strToBoolean); // true boolean



//FUNCTIONS

function greetPerson(name)
{
    console.log(`hello, ${name}!`)
}
function greetPersonn(name = "Guest")
{
    console.log(`hello, ${name}!`)
}

function calculateSum(a , b)
{
    console.log(a+b);
}

greetPerson("Mishal");
greetPerson(10);
greetPersonn();
calculateSum(10, 20); //if arguments are not known

//function with rest paramenter
function calculateSumm(...numbers) //count is not fixed
{
    let sum =0;
    for(let number of numbers)
    {
        sum += number;
    }
    console.log(sum);

}
calculateSumm(10, 20, 30);
calculateSumm(10, 20, 30, 40, 50);

function printAddress({street, city, zip})
{
    console.log(`Address: ${street}, ${city}, ${zip}`);
}

let address = {
    strret: "street1",
    city: "city1",
    zip: "052754"
};

printAddress(address);

//function with array
function printNumberss(numbers)
{
    console.log(numbers);
}
printNumberss([1,2,3,4,5,6]);

function saveNumbers(numbers)
{
    return numbers
}
let numb = saveNumbers(10);
console.log(numb);

function saveNumberss(numbers)
{
    let val = numbers * numbers;
    return {
        numbers, val
    }
}
let numbnumb = saveNumberss(10);
//let {numbes, val} = saveNumberss(15); -- wrong
let {numbers, val} = saveNumberss(15); //same name in the argumnets
console.log(numbnumb);
console.log(numbers, val);


//---------------------function can be called before declaring it


sayHello(); //IT WILL WORK

function sayHello()
{
    console.log("HELLO");
}
sayHello(); //IT WILL WORK


//greet(); //IT will not work before greet = assining un-named function
// Functionnnnn Expression
let greet = function()
{
    console.log("Hello");
}
greet(); // it will work

let multiply = function(a, b){
    return a * b;
}

console.log(multiply(10, 20));




//Functions are objects
function sayHello()
{
    console.log("Hello Again!");
}

sayHello();
let aaa = sayHello;
aaa();














/* arrow functions provide a more concise way 
for writing functions.*/

function sayHelloo(){
    console.log("Hello");
}

let greett = function() {
    console.log("Hello");
}

let greetArrow = () => console.log("Hello");
let greetArrow1 = (name) => console.log(`Hello ${name}`);

let greetArrowMultiple = () => {
    console.log("Hello 1");
    console.log("Hello 2");

}

let greetArrowParam1 = (name, age) => {
    console.log(`Hello 1 ${name}`);
    console.log(`Hello 2 ${age}`);

}

sayHelloo();
greett();
greetArrow();
greetArrow1("Mishal");

greetArrowMultiple();
greetArrowParam1("john", 32);

//return values
let summm = (a, b) => a + b;

console.log(summm(10, 20));









// function inside object
let personAlice = {
    name: "Alice",
    age: 33,
    greet: function(){
        console.log(`Hi I am ${personAlice.name}`);
        console.log(`Hi I am ${this.name}`);
    }
}
personAlice.greet();

let personJohn = {
    name: "John",
    age: 33,
    greet: () => {
        console.log(`Hi I am ${personAlice.name}`);
        //console.log(`Hi I am ${this.name}`); it will not this keyword work on arrow function
    }
}
personAlice.greet();

// Counter
let counter = {
    value: 0,
    incrementby: function(num){
        this.value +=num;
        return this.value;
    },
}

console.log(counter.incrementby(10)); //10
console.log(counter.incrementby(10)); //20


// defining methods dynamically
let dynamicMethod = {
    value: 0
};

console.log(dynamicMethod.value);

dynamicMethod.sayHi = function() {
    console.log("Hello Dynamic");
}

dynamicMethod.sayHi();

//Nested 
let car = {
    breand: "Toyota",
    specs: {
        speed: 120,
        displaySpecs: function(){
            console.log(`Speed`, this.speed);
        }
    }
}
car.specs.displaySpecs();







// Array Methods
// map() : Transforms each element and return a new array

function double(num) {
    return num * 2;
}

let numberss = [1, 2, 3, 4, 5];
let doubleNumbers = numberss.map(double);
console.log(doubleNumbers);

//Using Anonymous Function
let doubleAnonymous = numberss.map(function(num) {
    return num * 2;
});
console.log(doubleAnonymous);

//Using Arrow Functions
let doubleArrow = Function = numberss.map(num =>  num * 2);
console.log(doubleArrow);



// filter() : Return a new array with elements that pass a condition.
const evenNumbers = numberss.filter(num => num % 2 === 0);
console.log(evenNumbers);


// reduce() : Reduces the array to a single value.
let summ = numberss.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(summ);

// forEach() : Executes a function for each array element.
numberss.forEach(num => console.log(num));

// find() : Return the first element that satisfies a condition
let firstEven = numberss.find(num => num % 2 ===0);
console.log(firstEven);

// some() : checks if at least one element passes a test.
let hasNegative = numberss.some(num => num < 0);
console.log(hasNegative); //output- false
let hasNegativee = [-1, 2, 3, 4].some(num => num < 0);
console.log(hasNegativee); //output- true

// every() : checks if all elements pass a test.
let hasEvery = [-1, 2, 3, 4].every(num => num < 0);
console.log(hasEvery); //output- false

let hasEveryy = [-1, -2, -3, -4].every(num => num < 0);
console.log(hasEveryy); //output- true

// concat() : Merges arrays into a new array.
let moreNumbers = [6, 7, 9];
let newArray = numberss.concat(moreNumbers);
console.log(newArray); // output- 1,2,3,4,5,6,7,9,

// slice() : Return a portion of an array
let slicedNum = numberss.slice(1,3); //index 1 se (3-1) tak sare elementes nikalke sliceNum me daaldega
console.log(slicedNum); // output- 2,3

// Splice() : Modifies the array by removing/replacig elements.
let fruitsss = ["apple", "banana", "orange"];
fruitsss.splice(1,1,"mango");
console.log(fruitsss); //output- "apple", "mango", "orange"

// join() : Joins all elements into a string.
let allFruits = fruitsss.join("! ");
console.log(allFruits); //output- apple! banana! orange

// reverse() : reverses the order of the elements.
let reverseNumber = numberss.reverse();
console.log(reverseNumber);

// sort() : Sorts the elements of an array.
numberss = [3, 2, 1, 10];
let sortedNumber = numberss.sort((a, b) => a - b);
console.log(sortedNumber);


/*
TEMPLATE LITERALS
Allows you to work with strings in a more
flexible and readable way

SYNTAX: `${expression}`

*/

let nameeee = 'Alice';
let greeting = 'Hello' + name;
console.log(greeting);

let studentName = 'Alice';
let ageee=17;
let greetingg = `Hello  ${studentName}, you are ${age} year old`; //TEMPLATE LITERALS good wayyyy
console.log(greetingg);

//Multiline String
let multilinestring = `This
is
a
multiline
string`;
console.log(multilinestring);

// EXPRESSSION
let s = 5;
let m = 10;
let resultt = `The sum of ${s} and ${m} is ${s+m}`;
console.log(result);

// Objects
let userr = {
    firstName: "John",
    lastname: "Doe"
};
let userInfo = `User Info:
Name: ${userr.firstName} ${userr.lastname}`;
console.log(userInfo);

//Escaping backtick
let e = `This is a backtick \``;
console.log(e);

console.log("Hello world!");
console.log(123);

// Multiple values
console.log("Name:", "Alice", "Age:", 25); //25 is number
console.log("Name:", "Alice", "Age:" + 25); // 25 is string

// Use variables
let k = 10;
let j = 20;
console.log("The value of x", x);
console.log("Sum is", k+ j); // 30 is number
console.log(`Sum is ${x+y}`);// 30 is string

// Logging objects
let personn = {
    name: "Charlie",
    age: 28,
    profession: "Developer"
}
console.log(personn);

// Formatted output
console.log("The value of x is %d", x);
console.log("Hello %s, you are %d years old", "Alice", 22);


// console methods
console.error("This is an error");
console.warn("This is a warning");
console.info("This is a informational");

// console table
console.log(personn);
console.table(personn);



























/*
CONTROL STRUCTURES IN JAVASCRIPT
If else
switch statement
For Loop
While Loop
*/

//Similar to ditto similar to java
let nuk = 5;
if(nuk === 5)
{
    console.log("equal to 5 and type is also similar");
} else  if (nuk ==5){
    console.log("only equal to 5");
} else {
    console.log("not equal");
}

//SWITCH
const fruitTypee = "apple";
switch (fruitTypee){
    case "apple":
        console.log("Apples are $2 per kg.");
        break;
    case "banana":
        console.log("Banana are $2 per kg.");
        break;
    default:
        console.log("Dont have the fruit Sorry!");
        break;

        
}

let w = 5;
switch (fruitTypee){
    case w < 5:
        console.log("lesssser");
        break;
    case w > 5:
        console.log("greaterrrr");
        break;
    default:
        console.log("equal");
        break;

        
}
//For loops

for (let i = 0; i< 10; i++)
{
console.log(i);

}

let numbe = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i< numb.length; i++)
{
console.log(numbe[i]);

}

// A callback is a function that is passes as an 
// arguments to another function and is executed
// after a particular event or operation completes

//API
console.log("Immediate");

setTimeout(function () {
    console.log("Delay...");   
}, 2000);

function fetchData() {
    setTimeout(() => {
        console.log("Data from server...");
        return "Sample Data";
    }, 2000)
}

function processData() {
    let data = fetchData(); // undefined showing as output becuase fetchdata is talking 2000ms
    //  and its not waiting for 2000ms thats why call back csm into picture
    console.log(data);
    
}
processData();

// With CallBack
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        console.log("Data from server with callback...");
        let data = "Sample Data";
        callback(data);
    }, 2000)
}

function processDataWithCallback(data) {
    console.log('With Callback:',data);
    
}
fetchDataWithCallback(processDataWithCallback);

// Anonymous callback functions
function fetchDataWithAnon(callback) {
    setTimeout(() => {
        let data = "Sample Data";
        callback(data);
    }, 10000)
}

fetchDataWithAnon(function(data) {
    console.log('With Anon:',data);  
});
fetchDataWithAnon((data) => {
    console.log('With Anon:',data);  
});

// callbacks for success/ erros

function fetchDataWithSucessError(sucessCallback, errorCallback) {
    setTimeout(() => {
        //let errorOccured = true;
        let errorOccured = Math.random() < 0.5; // true or false
        
        if(errorOccured) {
            errorCallback("Error Occured");
        } else {
            let data = "Sample Data";
            sucessCallback(data);
        }
    }, 15000)
}

function onSuccess(data) {
    console.log("Success, ", data);
    
}
function onError(data) {
    console.log("Error, ", data);
    
}
fetchDataWithSucessError(onSuccess, onError);

//by anon function
fetchDataWithSucessError((data) => {
    console.log("Success, ", data);
}, (data) => {
    console.log("Error, ", data);
});



// Chained Callbacks / callbackes hell

function step1(callback) {
    setTimeout(() => {
        console.log("step 1 done");
        callback();
    }, 1000)
}
function step2(callback) {
    setTimeout(() => {
        console.log("step 2 done");
        callback();
    }, 2000)
}
function step3(callback) {
    setTimeout(() => {
        console.log("step 3 done");
        callback();
    }, 3000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});

// Use callbacks with Array Methods
let numbb = [1,2,3,4,5,6];
let doubleNumbbs = numbb.map(function(numbb) { //map ke andar wale function se jo value aarahi uska map callback kethrough horaha
    return numbb*2;
});
console.log(doubleNumbbs);


// Promises provides a cleaner and more structured
// way to handle asynchronous operations
// then() : When promise is fullfilled
// catch() : When promise is rejected

//Using callback
function getData(callback) {
    setTimeout(() => {
        let data = {name : "john", age: 30};
        callback(data);
    }, 1000)
}

getData((data) => {
    console.log(data);  
});

// With Promises

function getDataWithPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const data = {name : "Mishal", age: 23};
            resolve(data);
    }, 1000)

    });
    
}

getDataWithPromise()
    .then((data) => {
        console.log(data);  
    })
    .catch((error) => {
        console.log(error);  
    })

// With Promises success and failure

function getDataWithPromise1() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let success = Math.random() < 0.5;
            if(success)
            {
                const data = {name : "Mishal", age: 23};
                resolve(data);  
            } else {
                reject("Error: some reason by Promise");
            }
        
    }, 1000)

    });
    
}

getDataWithPromise1()
    .then((data) => {
        console.log(data);  
    })
    .catch((error) => {
        console.error(error);  
    })
    .finally(() => {
        console.log("finally.... always executed whether the functiohas sucess or failure");
        
    })

// Multiple promises
console.log("multiple promises....");
let promise1 = getDataWithPromise1();
let promise2 = getDataWithPromise1();
let promise3 = getDataWithPromise1();

Promise.all([promise1, promise2, promise3])
    .then((data) => {
        console.log("all done", data);
        
    })
    .catch((error) =>{
        console.error("Atleast 1 promise failed", error);
    })
//or via race
Promise.race([promise1, promise2, promise3])
    .then((data) => {
        console.log("all done via race", data);
        
    })
    .catch((error) =>{
        console.error("Atleast 1 promise failed via race", error);
    })




// async/await - simplifies asynchronous code by 
// making it look like synchronous code
// it improve readability and makes error handling
// straightforward with `try...catch`.
// You can use `async/await` with multiple
// asynchronous operations, HTTP requests,


function getData1() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let success = Math.random() < 0.5;
            if(success)
            {
                const data = {name : "Mishal", age: 23};
                resolve(data);  
            } else {
                reject("Error: some reason by Promise");
            }
        
    }, 1000)

    });
    
}

async function getDataAsyc() {

    try {
        let data = await getData1();
        console.log("1", data);
        let data1 = await getData1();
        console.log("2", data1); 
        // for data and data1 for both it should be true otherwise it will go to catch
    } catch(error) {
        console.error('error', error);
    }
    
    
}
getDataAsyc();

// try catch statement
// allows you to handle error gracefully
try {
    a();
    console.error("Hi");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("I am in Finally");
}








