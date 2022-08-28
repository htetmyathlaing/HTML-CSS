// this is comment
document.write("Hello World!");
console.log('Hello World from console!');
// alert('Welcome to my world');
/* 
 This is 
 multiple line comment 
*/

// Javascript DataTypes
// Boolean 
var isSuccess = true;
console.log('isSuccess => ',typeof isSuccess)
// Null 
var a=null;
console.log('a => ',typeof a)
//  Undefined 
var b;
console.log('b => ',typeof b)
// Number/BigInt
var age=10;
var height=10.5;
console.log('age => ',typeof age);
console.log('height => ',typeof height);
// String
var name="mg mg";
console.log('name => ',typeof name);
//  Symbol , Objects
console.log('window => ',typeof window);


console.log(name, window.name);
// block level ( let, const)
let city = 'Yangon';
console.log(city)

const dob=1990;
city = 'Mandalay';

// const cannot be assigned another value
// the following line will throw an error
// dob=1990;

// object literals
const person = {
    name: 'mg mg',
    age:10,
    height: 36,
}
console.log('person => ', typeof person)
person.name = 'aung aung';
console.log(person.name)

// the following line will throw an error 
person = {
    name: 'Hla Hla',
}