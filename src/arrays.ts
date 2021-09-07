/**
 * Arrays
 */
 
/**
 * Concat method
 */
 const zero = 0
 const positiveNumbers = [1,2,3]
 const negativeNumbers = [-3,-2,-1]
 
 const concatNumbers = negativeNumbers.concat(zero, positiveNumbers)
 //Resut -> [-3,-2,-1,0,1,2,3]
 console.log('concatNumbers', concatNumbers)
 
 /**
  * Iterators
  */
 const isEven = (x: number) => x % 2 === 0
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 
 /**
  * every - Stops iterating when false is returned
  */
 numbers.every(isEven)
 
 /**
  * some - Stops iterating when true is returned
  */
 numbers.some(isEven)
 
 /**
  * forEach - Iterate the entire array
  */
 numbers.forEach((x) => console.log(x % 2 === 0))
 
 /**
  * map - Iterate the entire array and returns a new array with the returned properties
  */
 const map = numbers.map(isEven)
 
 /**
  * filter - Iterate the entire array and returns a new array with items that return true from the function
  */
 const evenNumbers = numbers.filter(isEven)
 
 /**
  * reduce - Iterate the array and accumulate a value returning it after the iteration
  */
 const sum = numbers.reduce((previous: number, current: number) => previous + current)

 /**
  * for..of
  */
 for(const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd')
 }

 /**
  * @@iterator
  */
 const iterator = numbers[Symbol.iterator]()
 console.log(iterator.next().value) // 1
 console.log(iterator.next().value) // 2
 console.log(iterator.next().value) // 3

 /**
  * entries, keys and values
  */
 const entries = numbers.entries()
 console.log(entries.next().value) //[0, 1]
 console.log(entries.next().value) //[1, 2]

 const keys = numbers.keys()
 console.log(keys.next()) // { value: 0, done: false }
 console.log(keys.next()) // { value: 1, done: false }
 console.log(keys.next()) // { value: 2, done: false }

 const values = numbers.values()
 console.log(values.next()) // { value: 1, done: false }
 console.log(values.next()) // { value: 2, done: false }

 /**
  * Array.from
  */
 const numbers2 = Array.from(numbers)
 const evens = Array.from(numbers, x => (x % 2 === 0)) // [ false, true, false, true, false, true, false, true, false, true, ... ]

 /**
  * Array.of
  */
 const numbers3 = Array.of(1) // [ 1 ]
 const numbers4 = Array.of(1, 2, 3, 4, 5, 6) // [ 1, 2, 3, 4, 5, 6 ]
 const numbersCopy = Array.of(...numbers4) /// [ 1, 2, 3, 4, 5, 6 ]

 /**
  * fill
  */
 numbersCopy.fill(0) // [ 0, 0, 0, 0, 0, 0 ]
 numbersCopy.fill(2, 1) // [ 0, 2, 2, 2, 2, 2 ]
 numbersCopy.fill(1, 1, 3) // [ 0, 1, 1, 2, 2, 2 ]
 const ones = Array(6).fill(1) // [ 1, 1, 1, 1, 1, 1 ]
 
 /**
  * copyWithin
  */
 let copyArray = [1, 2, 3, 4, 5, 6]
 copyArray.copyWithin(0, 3) // [ 4, 5, 6, 4, 5, 6 ]
 
 copyArray = [1, 2, 3, 4, 5, 6]
 copyArray.copyWithin(1, 3, 5) // [ 1, 4, 5, 4, 5, 6 ]

 /**
  * Sorting elements
  */
 numbers.reverse() // [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, ... ]
 numbers.sort() // [ 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, ... ]
 numbers.sort((a: number, b: number) => a - b) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ... ]
 
interface Person {
    name: string;
    age: number;
}

 const friends: Person[] = [
     {name: 'John', age: 30},
     {name: 'Ana', age: 20},
     {name: 'Chris', age: 25},
 ]

 function comparePerson(a: Person, b: Person) {
     if(a.age < b.age){
         return -1
     }

     if(a.age > b.age) {
         return 1
     }

     return 0
 }
 console.log(friends.sort(comparePerson)) //[ { name: 'Ana', age: 20 }, { name: 'Chris', age: 25 },{ name: 'John', age: 30 } ]