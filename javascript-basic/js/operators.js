/**
 * Javascript Operators
 */

 let a=5, b=2;
 let result;

 console.log('a = ',a)
 console.log('b = ', b)

/**
 * Arithmetic Operator
 */

// 1. Add (+)
result = a + b;
console.log('a + b = ', result)

// 2. Subtract ( - )
result = a - b;
console.log('a - b = ', result)

// 3. Multiplication ( * )
result = a * b;
console.log('a * b = ', result)

// 4. Division ( / )
result = a / b;
console.log('a / b = ', result)

// 5. Exponentiation ( ** )
result = a ** b;
console.log('a ** b = ', result)

// 6. Modulus ( % )
result = a % b;
console.log('a % b = ', result)

// 7. Increment ( ++ )
a++ 
//same as  a = a + 1
console.log('a++ =', a)

// 8. Decrement ( -- )
b-- 
//same as  b = b - 1
console.log('b-- =', b)

/**
 * Assignment Operator
 */
let c;
c = 3;
console.log('c = ', c);

c += 2; /** c = c + 2 */
console.log('c += 2 ', c);

c -= 2; /** c = c - 2 */
console.log('c -= 2 ', c);

c *= 2; /** c = c * 2 */
console.log('c *= 2 ', c);

c /= 2; /** c = c / 2 */
console.log('c /= 2 ', c);

c **= 2; /** c = c * 2 */
console.log('c *= 2 ', c);

c %= 2; /** c = c % 2 */
console.log('c %= 2 ', c);

/**
 * String Concatenation Operator ( + )
 */
let firstName = "Mg";
let lastName = "Hla";
let fullName = firstName  + " " +lastName;
console.log('firstName + lastName = ',fullName)

/**
 * Template Lateralm(``) (Not an operator) (not ') (backtip)
 */
 fullName = `${firstName} ${lastName}` 

 /**
  * Comparison Operator
  */
 let d = 1;
 let e = 2;
 let r;
 console.log('d = ',d);
 console.log('e = ',e);
 // 1. Equal To ( == )
 r = d == e;
 console.log(' d == e => ', r);
 
// 2. Equal To value and type ( === )
console.log("2 == 2 => ", 2 == 2);
 /** 
  * Here number 2 becomes string 2
  * Type Coercion
  */
console.log("2 == '2' => ", 2 == '2'); // true

console.log("2 === '2' => ", 2 === '2'); // false

// 3. Not equal ( !=)
r = d != e;
console.log(' d != e => ', r);

// 3. Not equal value and type ( !== )
r = d !== e;
console.log(' d !== e => ', r);

// 4.Less than ( < )
r = d < e;
console.log(' d < e => ', r);

// 4.Greater than ( > )
r = d > e;
console.log(' d > e => ', r);

// 4.less than equal ( <= )
console.log(' 2 <= 2 => ', 2 <= 2);

// 4.greater than equal ( >= )
console.log(' 3 >= 3 => ', 3 >= 3);

/**
 * typeof Operator
 */
console.log("typeof 2" ,typeof 2)
console.log("typeof 2.2" ,typeof 2.2)
console.log("typeof '2'",typeof '2')


/**
 * Conditional Operator / Ternary Operator ( ? )
 */

let voltage = 200;
let voltageStatus = (voltage >= 220) ? 'Hight Voltage':'Low Voltage';

console.log(voltageStatus);

/**
 * same as using with if statement
 */
if(voltage >= 220){
    voltageStatus = 'Hight Voltage';
}else{
    voltageStatus = 'Low Voltage';
}

/**
 * Logical Operator
 */
// 1. and  ( && )
console.log(true && false)
console.log(true && true)
console.log(false && false)
let f, s;
console.log((f= 1 > 2) && (s = 2 < 3))
console.log(f , s)

// 2. or ( || )
console.log(true || false)
console.log(true || true)
console.log(false || false)
let f1, s1;
console.log((f1 = 2 < 3) || (s1= 1 > 2))
console.log(f1 , s1)

// 3. not ( ! )
console.log(!true)
console.log(!false)
console.log(!!!false)
 
/**
 * Bitwise Operator
 * refs
 * https://www.programiz.com/javascript/bitwise-operators
 */

/**
 * Adding Number and String
 */
let number1 = 2;
let number2 = 3;
let string = '3';
console.log( number1 + string) // 23
console.log( string + number1) // 32
console.log( number1 + number2 + string) // 53

