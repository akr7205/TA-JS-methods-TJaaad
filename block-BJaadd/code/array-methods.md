Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());"Fire,Air,Water"
console.log(elements.join(''));"FireAirWater"
console.log(elements.join('-'));"Fire-Air-Water"

const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.join(" and "); Banana and Orange and Apple and Mango

parameter-separator string
return-A string with all array elements joined. If arr.length is 0, the empty string is returned. 

3. `flat`
const arr1 = [0, 1, 2, [3, 4],[1,5]];

console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
console.log(arr2.flat(Infinity));
> Array [0, 1, 2, 3, 4, 1, 5]
> Array [0, 1, 2, Array [3, 4]]
> Array [0, 1, 2, 3, 4]
Parameters
depth Optional
The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
Return value
A new array with the sub-array elements concatenated into it.
4. `push`
The push() method adds one or more elements to the end of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
Parameters
elementN
The element(s) to add to the end of the array.
Return value
The new length property of the object upon which the method was called.
5. `indexOf`
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
Syntax
array.indexOf(item, start)
Return value
The first index of the element in the array; -1 if not found.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 4
console.log(beasts.indexOf('bison', 4));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

6. `lastIndexOf`
The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo',2));
// expected output: 0
console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
console.log(animals.lastIndexOf('Dodo',1));
// expected output: 3


console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
7. `includes`
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// expected output: true
console.log(pets.includes('at'));
// expected output: false
console.log(pets.includes('cat',1));
// expected output: false
Syntax
includes(searchElement)
includes(searchElement, fromIndex)
return true/false
8. `reverse`
const array1 = ['one', 'two', 'three'];
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();Mango,Apple,Orange,Banana
9. `every`
const isBelowThreshold = (currentValue) => currentValue > 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));//false
const ages = [32, 33, 16, 40];
ages.every(checkage =>checkage>18);//false

10. `shift`
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
Return- shift return removed element
const array1 = [1, 2, 3];
console.log(array1.shift());
// expected output: 1
console.log(array1);
// expected output: Array [2, 3]

11. `splice`
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
Return value
An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.
12. `find`
The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 1, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 130

13. `unshift`
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

14. `findIndex`
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3

15. `filter`
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
16. `flat`
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

17. `forEach`
The forEach() method executes a provided function once for each array element.
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

18. `map`
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
Return value
A new array with each element being the result of the callback function.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
19. `pop`
The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
Return value
The removed element from the array; undefined if the array is empty.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

20. `reduce`
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not change the original array.
const array1 = [1, 2, 3, 4];
const sum = array1.reduce(
  (accumulator, currentValue) => {accumulator + currentValue,
  },0);
sum=10;
21. `slice`
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

22. `some`
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
