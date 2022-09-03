// Object Literal
let person = {
    firstName: 'Mg Mg',
    lastName: 'Hla',
    dob: 1995,
    // object method
    age: function(){
        return (new Date()).getFullYear() - this.dob
    },
    // getter
    get fullName() {
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    },
    // setter
    set fullName(name){
        // let nameArray = name.split(' ')
        // this.firstName = nameArray[0];
        // this.lastName = nameArray[1];
        // array destructure
        let [firstName, lastName] = name.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    },
}

// With new Keyword
let animal = new Object();
animal.legs = 4;
/**
 * same as follow
 * let animal = {
 *  legs : 4
 * }
 */

console.log('Person First Name =>',person.firstName)
console.log('Person Age =>',person.age())
console.log('Person Full  Name =>', person.fullName)

person.firstName = 'Ma';
person.lastName = 'Mya';
console.log('Person Full  Name =>', person.fullName)

person.fullName = 'Ko Aung'
console.log('Person Full  Name =>', person.fullName)

function someAction1(obj){
    // person.firstName = 'Set From someAction one'
    console.log(obj === person) // true
    obj.firstName = 'Set From someAction one'
}

function someAction2(obj){
    console.log(obj === person) // false
    obj.firstName = 'Set From someAction two'
    console.log('fist name in someAction2=>', obj.firstName)
}

// objects are passed by reference
someAction1(person)
console.log('Person first name after someAction=>', person.firstName)

// to pass value, use  Spread Operator
someAction2({...person})

console.log('Person first name after someAction=>', person.firstName)