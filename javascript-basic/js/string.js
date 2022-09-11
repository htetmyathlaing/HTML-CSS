let name = 'mg mg';
let school = "Javascript School";
let bio = `
This is about 
${name} attenting at ${school}
`;

console.log(bio)

// escape character
let someString1 = 'Mg Mg\'s dog is Bo Bo' 
let someString2 = "writing double qoute \"" 
let someString3 = "writing double backslash \\" 
let someString4 = "something\n after new line"
console.log(someString1)
console.log(someString2)
console.log(someString3)
console.log(someString4)

// string length
let text = "The quick brown fox jumps over the lazy dog";
console.log(text.length)

// string extraction
console.log(text[0])
console.log(text.charAt(4))

console.log(text.slice(4,9))
console.log(text.slice(9,4)) // return empty string

console.log(text.substring(4, 9))
console.log(text.substring(9, 4)) // swap indexes

console.log(text.substr(4, 5)) // deprecated

// change case
let lowerCaseString = 'lowercase';
let upperCaseString = 'UPPERCASE';
console.log(lowerCaseString.toLocaleUpperCase())
console.log(upperCaseString.toLowerCase())

// concat()
let string1 = "Red"
let string2 = "Wine"
let string3 = "taste good"
console.log(string1 + string2)
console.log(`${string1} ${string2}`)
console.log(string1.concat(" ", string2, " ", string3))


// trim
let untrimedSting = " something is not right. "
console.log(untrimedSting.trimStart())
console.log(untrimedSting.trimEnd())
console.log(untrimedSting.trim())

// pad

let uncompletedString = 'HP'
console.log(uncompletedString.padStart(4,'x'))
console.log(uncompletedString.padEnd(6,'-'))

// replace
let wrongString = "this is right"
console.log(wrongString.replace('right', 'wrong'))
console.log(wrongString.replace(/RIGHT/i, 'wrong'))

let replacedString = "He doesn't like orange. He hates orange"
console.log(replacedString.replace('orange' , 'apple'))
console.log(replacedString.replaceAll('orange' , 'apple'))
console.log(replacedString.replace(/orange/g , 'apple'))


// search() => return index number if found, return -1 if not
let stringToSearch = "Hello World, I'm a JavaScript learner."
console.log(stringToSearch.search('JavaScript'))
console.log(stringToSearch.search('javascript'))
console.log(stringToSearch.search(/javascript/i))

// indexOf() ,lastIndexOf()  => return index number if found, return -1 if not
console.log(stringToSearch.indexOf('JavaScript'))
console.log(stringToSearch.indexOf(/javascript/i)) // not working, no error

console.log(stringToSearch.indexOf('r'))
console.log(stringToSearch.lastIndexOf('r'))

// includes() => return true|false
console.log(stringToSearch.includes('JavaScript'))
console.log(stringToSearch.includes('JavaScript', 20))

// startsWith(), endsWith() => return true|false
console.log(stringToSearch.startsWith('H'))
console.log(stringToSearch.startsWith('H', 1))
console.log(stringToSearch.endsWith('H'))


