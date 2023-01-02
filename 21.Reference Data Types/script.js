// Reference Data type

// 1. Object
// 2. Array
// 3. Functions


// 1.Object
/*  Syntax
{
    "key": "value" - key value pair
}
*/

// Example object

let person = {
    name: "Uday",
    age: 26,
    address: "4-10,vijayawada,A.P",
};

console.log(person);


// Access Object by dot notation

console.log(person.name);
console.log(person.age);
console.log(person.address);

// Access object by bracket notation - Square bracket

console.log(person["name"])
console.log(person["age"])
console.log(person["address"])

// Change key value by dot notation
person.age = 27
console.log(person)

// Change key value by bracket notation

person["age"] = 28
console.log(person)


// Insert a key value pair

person.gender = "Male"
person["Work Experience"] = "4 Years"

console.log(person);


// Nested Object

let personWithNestedObj = {
    name: "M Uday",
    age: 27,
    address: "4-10, North steet,A",
    isMarried: false,
    siblings: {
        firstSibling: {
            name: "Prasad",
            age: 28
        },
        secondSibling: {
            name: "Suchithra",
            age: 2
        },
    }
}

// Nested object access
console.log(personWithNestedObj.siblings.firstSibling.name)
console.log(personWithNestedObj.siblings.firstSibling.age)
console.log(personWithNestedObj["siblings"]["secondSibling"]["name"])
console.log(personWithNestedObj["siblings"]["secondSibling"]["age"])

// To check person variable type

console.log(typeof person)


// 2. Array
/* Syntax
  let favFruits = ["Apple", "Orange"]
  */

let emptyArr = [];
let favColours = ["Red", "Purple", "Violet", "white"] // Array of string
let favNumbers = [09, 04, 18, 27, 27] //Array of numbers

let persons = [{ name: "Uday", age: 27 }, { name: "Kiran", age: "26" }]; // Array of object
// Nested Array
let wholeNumber = [1, "3", 5, 7, [12, 4, 6, 8], { name: "Uday", age: 27 }, true]
console.log(emptyArr)
console.log(favColours)
console.log(favNumbers)
console.log(persons)

console.log(typeof emptyArr, "Array Type -----");


//  Access array by index

console.log(favColours[0])
console.log(favColours[1])
console.log(persons[1])

// Change by index
favNumbers[0] = 6
console.log(favNumbers)

// Insert by index

favNumbers[6] = 7
console.log(favNumbers)
console.log(favNumbers[5])

// Access nested array
console.log(wholeNumber[4][2])
console.log(wholeNumber[5]["name"])

// Legnth Property
console.log(wholeNumber)
console.log(wholeNumber.length)


// 3. Functions - Set of Statement
// An Example of statement is., let add = x+y;, let name = "Anwar";
/* Syntax
function printMyName() = {
} */
// {} - Curly Brace
// [] - Square bracket
// () - paranthesis
function printMyName() {
    console.log("UDAY", "Looppppp");
}
printMyName();

function addTwoNumbers() {
    let firstNumber = 53;
    let secondNumber = 47;
    let result = firstNumber + secondNumber
    console.log(result)
}
addTwoNumbers();

// Argument and parameter
function add(firstNumber, secondNumber) { // Parameter
    let result = firstNumber + secondNumber;
    console.log(result);
}
add(34, 43); // Argument
add(89.2899, 43);
add(90.282, 43);

// ES6 - Arrow function - Another way of defining a function
/* const x = () => {} */
let multipleTwoNumber = (x, y) => {
    let result = x * y;
    console.log("Multiplication Result", result);
}
multipleTwoNumber(25, 25);


// Return of function block
let divideTwoNumbers = (firstNumber, secondNumber) => {
    let result = firstNumber / secondNumber;
    return result
}

let divideResult = divideTwoNumbers(4, 7);
console.log(divideResult, "Line number 176");