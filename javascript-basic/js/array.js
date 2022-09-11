/**
 * Declaring Array
 */
let arr = [1, 2, 3];
let multiDimensionalArray = [[1,2,3], [4,5,6]];
console.log(multiDimensionalArray[1][2])

let arr2 = new Array(); // empty array, same as arr2 = []
let arr3 = new Array(5); // length 5
let arr4 = new Array('string'); // item
let arr5 = new Array(1,2,3); // items
console.log(arr2.length)
console.log(arr3.length)
console.log(arr4)
console.log(arr5)

arr2[0] = 'hello'
console.log(arr2)

arr3[0] = 'hello'
arr3[4] = 'world'
arr3[5] = '!'
arr3[10] = '!'
console.log(arr3.length)

arr5.length = 2
console.log(arr5)

let person  = {
    name: 'mg mg',
    age: 14,
}

console.log(person.name)
console.log(person.age, person['age'])
let propertyName = 'name'
console.log(person[propertyName])

let person2 = [1]
console.log(typeof person2) // object
console.log(person2)

person2['name'] = 'Person2'
console.log(person2)

/* Printing the person object to the console. */
console.log(Object.keys(person))
console.log(Object.keys(person2))
console.log(Object.keys(arr))

console.log(arr.length) // 3
console.log(person.length) // undefined

