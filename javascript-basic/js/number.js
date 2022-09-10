let i = 100;
let f = 56.4789;

// floating point arithmetic si not always 100% precise.
let sum = 0.2 + 0.1;
console.log('0.2 + 0.1 => ', sum)

sum = ((0.2 * 10) + (0.1 * 10))/10;
console.log(' ((0.2 * 10) + (0.1 * 10))/10 => ', sum)

// number adding or string concatenation
let a = 5, b=7;
sum = a + b;
console.log('a + b =>' , sum)

let c = '6';
sum = a + c;
console.log('a + c =>' , sum)

sum = a + b + c;
console.log('a + b + c =>' , sum)

sum = a + c + b; 
console.log('a + c + b =>' , sum)

// toString()
let number = 64;
console.log('number.toString()', typeof number.toString())
console.log('number.toString(2)', number.toString(2))
console.log('number.toString(4)', number.toString(4))
console.log('number.toString(8)', number.toString(8))
console.log('number.toString(10)', number.toString(10))
console.log('number.toString(16)', number.toString(16))

// toFixed()
let fixedNumber = 34.34867436;
console.log('fixedNumber.toFixed()', fixedNumber.toFixed(0))
console.log('fixedNumber.toFixed()', fixedNumber.toFixed(2))

// toPrecision()
let precisedNumber = 436.12153;
console.log('precisedNumber.toPrecision()', precisedNumber.toPrecision())
console.log('precisedNumber.toPrecision()', precisedNumber.toPrecision(2))
console.log('precisedNumber.toPrecision()', precisedNumber.toPrecision(3))

// Converting String to Number
let stringNumber = '23';
// Number()
console.log('Number(stringNumber) => ',  Number(stringNumber))
console.log("Number('5') == 5" , Number('5') == 5);
console.log("Number('5') === 5" , Number('5') === 5);
console.log("new Number('5') == 5" , new Number(5) == 5);
console.log("new Number('5') === 5" , new Number(5) === 5);

// parseInt
console.log("parseInt('5') =>" , parseInt('5'));
console.log("parseInt('50 apples') =>" , parseInt('50 apples'));
console.log("parseInt(' 60 kyats') =>" , parseInt(' 60 kyats'));
console.log("parseInt('person 1') =>" , parseInt('person 1'));
console.log("parseInt('3.543') =>" , parseInt('3.543'));

// parseFloat
console.log("parseFloat('3.543') =>" , parseFloat('3.543'));

// toLocalSting
let formattedNumber = 35670000;
console.log('formattedNumber.toLocaleString() => ', formattedNumber.toLocaleString());