// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
let cloneedArray = [...numbers];
let cloneedStrings = [...strings];
// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(' ');
// - Add two new words in the strings array "called" and "sentance"
strings.push('called', 'sentance');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(' ');

// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
let filterIS = strings.filter(word => word.includes('is'));
// - Find all the words that contain 'is' use string method 'indexOf'
let filterIS2 = strings.filter(word => word.indexOf('is') != -1);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
// let divisibleby3=(value) => value%3 === 0;
// console.log(numbers.every(divisibleby3));
let res = numbers.every(value => value % 3 === 0);
console.log(res);
// -  Sort Array from smallest to largest
numbers.sort(function (a, b) { return a - b });
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largest = numbers.sort((a, b) => a - b).pop();
console.log(largest);
// - Find longest string in strings
let longestWord = strings.sort(function (a, b) {
  return b.length - a.length;
});
console.log(longestWord[0]);
// - Find all the even numbers
console.log(numbers.filter(num => num % 2 == 0));
// - Find all the odd numbers
console.log(numbers.filter(num => num % 2 != 0));

// - Place a new word at the start of the array use (unshift)
strings.unshift('Arun');
// - Make a subset of numbers array [18,9,7,11]
console.log(cloneedArray.slice(3, 7));
// - Make a subset of strings array ['a','collection']
console.log(cloneedStrings.slice(2, 4));
// - Replace 12 & 18 with 1221 and 1881
// cloneedArray.splice(cloneedArray.indexOf(12),1,1221);
let replaceArr = cloneedArray.map((num) => {
  if (num == 12) {
    return 1221;
  }
  else if (num == 18) {
    return 1881;
  } else {
    return num;
  }
})
console.log(replaceArr);
// - Replace words in strings array with the length of the word
let stringsLength = cloneedStrings.map((str) => str.length);
// - Find the sum of the length of words using above question
let stringsum = stringsLength.reduce((acc, cv) => {
  return acc + cv;
}, 0);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filteredcustomer = customers.filter((customer) =>
  customer.firstname.startsWith('J'));
// - Create new array with only first name
let filteredcustomer1 = customers.map((customer) => customer.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let filteredcustomer2 = customers.map((customer) =>
  `${customer.firstname} ${customer.lastname}`
);

// - Sort the array created above alphabetically
console.log([...filteredcustomer2].sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelsCustomer = customers.filter((customer) => {
  if (
    customer.firstname.toLocaleLowerCase().includes('a') ||
    customer.firstname.toLocaleLowerCase().includes('e') ||
    customer.firstname.toLocaleLowerCase().includes('i') ||
    customer.firstname.toLocaleLowerCase().includes('o') ||
    customer.firstname.toLocaleLowerCase().includes('u') 
    )
   
  {
    return true;
  }
  else {
    return false;
  }
});