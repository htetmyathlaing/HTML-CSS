/**
 * Conditional
 */

let age = 5;
let school = 'School 3';

function checkAgeWithIfElse(age){
    if(age < 18){
        console.log('Under Age')
    }else if(age >= 18 && age < 30){
        console.log('Youth')
    }else if(age >= 30 &&  age < 50){
        console.log('Adult')
    }else{
        console.log('Over Age')
    }
}

function printSchoolGradeWithSwitch(school){
    let result = '';
    switch(school){
        case 'School 1':
            result = 'Grade 1';
            break;
        case 'School 2':
            result = 'Grade 2';
            break;
        default:
            result = 'No grade';
            break;
    }

    console.log(result)
}

checkAgeWithIfElse(age)

printSchoolGradeWithSwitch(school)

/**
 * Looping
 * for, while, do-while, for-in, for-of
 */

/**
 * for lop
 */

// breaking loop
for(let i = 0; i < 10 ; i++){
    if(i == 5){
        break;
    }
    console.log('before break', i)
}

// continuing loop
for(let i = 0; i < 10 ; i++){
    if(i < 5){
       continue;
    }
    console.log('after continue', i)
}

// nested loop
for(let i = 0; i < 10 ; i++){
    for(let j= 9; j >= 0 ; j--){
        console.log(i,j)
    }
}

/**
 * while loop
 */
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// for exercise, write break and continue statements with while loop.


/**
 * do-while loop
 */
let j = 0;
while(j > 0){
    console.log('with while loop',j);
    i++;
}

let k = 0;
do{
    console.log('with do-while loop',k);
    k--;
}
while(k > 0);


/**
 * for-in
 */
// looping through object properties
let person = {
    name: 'mg mg',
    age: 16,
    height: 5.6,
}
for(let key in person){
    console.log(key, person[key])
}

// looping through array
let arr = [ 1, 2, 3];
for(let index in arr){
    console.log(index, arr[index])
}

/***
 * for-of loop
 */
// looping array
for(let x of arr){
    console.log(x)
}

// looping a string
let alphabets  = 'abcdef'
for(let x of alphabets){
    console.log(x)
}

/**
 * Looping An Array
 */
let numbers = [5, 8, 9 ,13, 1];

// using for loop
console.log('start for loop')
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}
console.log('end for loop')

// using while loop
console.log('start while loop')
let index = 0;
while(index < numbers.length){
    console.log(numbers[index])
    index++
}

// should not use do-while
let emptyArray = [];
do{
    console.log(emptyArray[index])
    index++
}while(index < emptyArray.length)
console.log('end while loop')

// using for-in
// using for-of


/**
 * Iterating Array
 */
// forEach()
numbers.forEach(n => console.log('with foreach', n))

// map()
let newNumbers = numbers.map(n => n*2)
console.log(numbers, newNumbers)

// filter()
console.log(numbers.filter((n) => n > 8));

// reduce()
// without initial value
console.log('start without initial value')
numbers.reduce((total, current) => {
    console.log('total', total)
    console.log('current', current)
})
console.log('end without initial value')

// with initial value
console.log('start with initial value')
numbers.reduce((total, current) => {
    console.log('total', total)
    console.log('current', current)
}, 0)
console.log('end with initial value')

let sum = numbers.reduce((total, current) => {
  return total += current
})

sum = numbers.reduce((total, current) => total += current)
console.log(sum)

// exercise 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#syntax