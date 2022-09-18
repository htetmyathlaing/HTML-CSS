let flowers = ['rose', 'jasmine', 'lilly',  'rose']

// indexOf(), lastIndexOf()
console.log(flowers.indexOf('rose'))
console.log(flowers.lastIndexOf('rose'))

// includes()
console.log(flowers.includes('jasmine'))
console.log(flowers.includes('orchid'))

// push(), unshift()
// flowers[flowers.length] = 'orchid'
flowers.push('orchid')
console.log(flowers)

flowers.unshift('tulips')
console.log(flowers)

// shift(), pop()
console.log(flowers.shift())
console.log(flowers)

console.log(flowers.pop())
console.log(flowers)

// delete()
delete flowers[4]
console.log(flowers[4])
console.log(flowers)

// converting string to array 
let text = "The quick brown fox jumps over the lazy dog";
let arrayConvertedFromString = text.split(' ')
console.log(arrayConvertedFromString)

// slice(), splice()
console.log(arrayConvertedFromString.slice(1, 4))
console.log(arrayConvertedFromString)

console.log(arrayConvertedFromString.splice(1, 3)) // also delete from original array
console.log(arrayConvertedFromString)


/**
 * converting array to string 
 */
// toString()
console.log(flowers.toString())

// join()
console.log(flowers.join())
console.log(arrayConvertedFromString.join(' '))

/**
 * Merging Array
 */
let firstArr = [2,3,4];
let secondArr = [5,6,7];

// using spread operator
let mergedArray = [...firstArr, ...secondArr];
console.log(mergedArray)

// using concat function
let mergedArray2 = firstArr.concat(secondArr)
console.log(mergedArray2)

/**
 * Iterating Array
 */

/**
 * searching
 */
console.log(flowers.find((f) => f === 'rose'));
console.log(flowers.find((f) => f.includes('se')));
console.log(flowers.findIndex((f) => f.includes('se')));

/**
 * filter()  => return array
 */
console.log(flowers.filter((f) => f.includes('e')));

/**
 * map() => return array
 */
let numbers = [3,5,4,1,2];
let makeTriple = (number) => number * 3
let newNumbers1 = numbers.map((n)=> n * 2)
let newNumbers2 = numbers.map(makeTriple)
console.log(newNumbers1, newNumbers2)

/**
 * some(), every() => return boolean
 */
console.log(numbers.some((n)=> n > 4))
console.log(numbers.every((n)=> n >= 1))

/**
 * minimum, maximum
 */
 console.log(Math.min.apply(null, numbers))
 console.log(Math.max.apply(null, numbers))

 // using lodash lib
 console.log(_.min(numbers))
 console.log(_.max(numbers))

 /**
  * sorting array
  */
 let sortNumberAsc = (a, b) =>  a - b 
 let sortNumberDesc = (a, b) =>  b - a
 console.log(numbers.sort(sortNumberAsc))
 console.log(numbers.sort(sortNumberDesc))

 let sortStingAsc = (a, b) =>  a.localeCompare(b) 
 let sortStingDesc = (a, b) =>  b.localeCompare(a) 
 console.log(flowers.sort(sortStingAsc))
 console.log(flowers.sort(sortStingDesc))

 // reverse
console.log(flowers.reverse())



 