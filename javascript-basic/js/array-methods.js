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

