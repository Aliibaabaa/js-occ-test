//Type Coercion

//Numbers
let number = "123";
console.log(typeof number)

//--convert using Number()
convertedNumber = Number(number);
console.log(typeof convertedNumber);

//String
let num = 123;
console.log(typeof num);

//--convert using String()
convertedString = String(num);
console.log(typeof (convertedString));

// num.toString();

//Boolean
// false  = 0, null, undefined, NaN, ""
let boolValue = Boolean(0);
console.log(boolValue);

boolValue = Boolean("Hello");
console.log(boolValue);

// ==========================
console.log(1 + "1");
console.log([3, 4] + "1");


// ==========================
// ARITHMETIC OPERATORS
//  + , - , * , ** , / , % , ++ , --

let x = 5;
let y = 2;

let sum = x + y;
console.log("Sum is:", sum);

let difference = x - y;
console.log("Difference is:", difference);

let product = x * y;
console.log("Product is:", product);

let quotient = x / y;
console.log("Quotient is:", quotient);

let modulus = x % y;
console.log("Remainder is:", modulus);

sum++;
difference--;

console.log("Sum++ :", sum, "Diff-- :", difference);

let message = "Hello " + "world!";
console.log(message);

let samp = "Hi" + 10;
console.log(samp);


// ASSIGNMENT OPERATORS [ = ]
//Assignment Expressions:
// equal to [ == ]
// Addition Assignment [ += ] -> x +=y -> x=x+y
// Subtraction Assignment [ -= ] -> x = x - y
// Multiplication Assignment [ *= ] -> x = x*y
// Division Assignment [ /= ] -> x = x / y

let a = 10;
let b = 5;

a += b; // a = a + b --> a = 10 + 5
console.log("a: ", a);

a -= b; // a = a - b -->  a = 15 - 5
console.log("a: ", a);

a *= b; // a = a * b
console.log("a: ", a);

a /= b; // a = a / b
console.log("a: ", a);

