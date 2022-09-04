// Function Declaration
function staticAdd(){
    return 1+2;
}

let result;
result = staticAdd();
console.log('normal function', result)

// Function Expression  with Anonymous Function 
const  anonymousFunction = function(){
    return 2+3;
}

result = anonymousFunction();
console.log('Anonymous Function', result)

// Arrow Function
const  arrowFunctionWitSingleLine = () => 5+1;
const  arrowFunctionWitMultipleLine = () => {
    let a = 5;
    let b = 6;
    return a + b;
}

result = arrowFunctionWitSingleLine();
console.log('arrowFunctionWitSingleLine', result)

result = arrowFunctionWitMultipleLine();
console.log('arrowFunctionWitMultipleLine', result)



// Self-Invoking Function

let text = 'not invoked';
(function () {
    text = "I'm a Self-Invoking Function";
})();

console.log('Self-Invoking Function', text);


// Function Parameters
function add(a=1,b=2){
    return a + b;
}
// const add = (a,b) => a+b

// Function Arguments
result = add(2, 4)
console.log('add ', result)
console.log('add without arguments', add())

// A little dive into this keyword

// Invoked as a function
function test(){
    console.log('this === window', this === window)
}
console.log('this === window', this === window)
test()

// Invoked as a method
const person = {
    name: 'Person',
    getName: function(){
        // console.log('this === person', this === person)
        return this.name
    }
}
console.log(person.getName())

// as a constructor
function Person(name){
    this.name = name
}

let p1 = new Person('Mg Hla')
let p2 = new Person('Ma Mya')
console.log(p1.name)
console.log(p2.name)


// via call , apply, bind
let person1 = {
    name: 'Person 1'
}

let person2 = {
    name: 'Person 2'
}

let person3 = {
    name: 'Person 3'
}

console.log(person.getName())
console.log(person.getName.call(person1))
console.log(person.getName.apply(person2))
console.log(person.getName.bind(person3)())


console.log(add(1, 5))
console.log(add.apply(null, [3, 7]))
console.log(add.call(null, 4, 8))

// Closure

let globalScopeVariable = 'Global';

function someFunction(){
    let functionScopeVariable = 'Function'
    console.log(functionScopeVariable)
    console.log(globalScopeVariable)
}

console.log(globalScopeVariable)
// console.log(functionScopeVariable) // will throw error
someFunction()

function Counter(){
    let counter = 0
    this.add = function(){
        counter++
        return counter
    }
}

let counter = new Counter();
counter.add()
counter.add()
console.log(counter.add())


let count = (function(){
    let counter = 0 
    return function(){
        counter ++
        return counter;
    }
})();

count()
count()
console.log(count())




