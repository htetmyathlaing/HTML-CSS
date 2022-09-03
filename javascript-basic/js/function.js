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

// Closure