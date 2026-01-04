// Closures allow a function to acess variables from its
// outer (enclosing) function scope

let count = 0;

function incrementCount() {
    count++;
}
incrementCount(); 
incrementCount(); 
incrementCount(); 
console.log(count); //3

count = 100;
console.log(count); //100

// yaha uper count ki value update horahi par bahar se bhi
// count ko update karderahe privacy nhi hai

// CLOSURES FUNCTION
function incrementCount1() {
    let countt = 0;
    countt++;
    console.log(countt);
    
}
incrementCount1() //1
incrementCount1() //1
incrementCount1() //1

// hum chah rahe privacy bhi rahe aur update bhi ho aise with incremention
// By Closures yeh horaha privacy bhi hai persistance bhi rah raha matlab count increment hogya woh
// yaad rakh raha au har baar initialiase nhi kar raha let count =0 ki wajah se
function createCounter() {
    let count = 0;

    function incrementCount(){
        count++;
        console.log(count);
        
    }
    return incrementCount;
}

let counter = createCounter();
counter(); //1
counter(); //2
counter(); //3

let counter2 = createCounter();

count  = 1000;
console.log(count); // 1000

counter(); //4
counter2(); //1
counter(); //5




//Multiple Functions
function createCounterMul() {
    let count = 0;

    function incrementCount() {
        count++;
        console.log(count);
        
    }
    function getCount() {
        return count;
    }
    return {incrementCount, getCount};
}

let counterMul = createCounterMul();
counterMul.incrementCount(); //1
console.log(counterMul.getCount()); //1

let counterMul2 = createCounterMul();
counterMul2.incrementCount(); //1
counterMul2.incrementCount(); //2
counterMul2.incrementCount(); //3
console.log(counterMul2.getCount()); //3





// Function Factories
function createGreeting(greeting) {
    return function(name) {
        console.log(greeting + ', ' + name + '!');
    }
}
let sayHello = createGreeting("Hello");
sayHello("Alice");
sayHello("Mishal");

let sayGoodBye = createGreeting("GoodBye");
sayGoodBye("Alice");
sayGoodBye("Mishal");
















// Spread Operator (...): Used to expand elements of an
// iterable (like arrays or strings) or properties of object
// into individual elements or properties.
let originalArray = [1, 2, 3];
console.log(originalArray); // [1, 2, 3]
console.log(originalArray[1]); //2
console.log(...originalArray); // this is sperad operator will print [1, 2, 3]

let copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]  -------IMPORTANT

console.log(Math.max(1, 2, 3, 4, 5)); //5
console.log(Math.max(originalArray)); // NaN
console.log(Math.max(...originalArray)); // 3

let myString = "Hello";
console.log(...myString); // H e l l o
let stringArray = [...myString]
console.log(stringArray); // ['H', 'e', 'l', 'l', 'o']  -------IMPORTANT

let mergedArray = [...originalArray, ...stringArray];
console.log(mergedArray); // [1, 2, 3, 'H', 'e', 'l', 'l', 'o' ]

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...originalArray)); // 6

let object1 = {name: "Alice", age: 25};
let object2 = {job:"Engineer", city: "new york"};
let mergedObject = {...object1, ...object2};
console.log(mergedObject); // {name: "Alice", age: 25, job:"Engineer", city: "new york"}











// The rest operator (`...`) is used to collect
// multiple values into single variable.
// It is especially useful when working with an 
// unknown or variable number of arguments

function sum(...numbers){
    let total =0;
    for (const num of numbers)
    {
        total += num;
    }
    return total;
}

console.log(sum(3,2,4)); //9
console.log(sum(3,2,4,5,6,7,9));//36

// Arrays
let fruits = ["Apple", "Banana", "strwaberry", "cherry", "chiku"];
let [first, second, ...restoffruits] = fruits;
console.log("first", first);
console.log("second", second);
console.log("restoffruits", restoffruits);



// Objects
let person = {
    name : "Alice",
    age: 25,
    city: "New York"
}
let {name, ...restOfPerson} = person;
console.log(name); // Alice
console.log(restOfPerson); // {age: 25, city: "New York"}


// REST with SPREAD
 function showName(first, second, ...others) {
    console.log(first);
    console.log(second);
    console.log(others);
    
 }

let names = ["Apple", "Banana", "strwaberry", "cherry", "chiku"];
showName(...names); // Apple
                    // Bannana
                    // strwaberry, cherry, chiku








