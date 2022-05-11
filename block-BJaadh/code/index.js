// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
let cloneedArray=[...numbers];
let cloneedStrings=[...strings];
// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(' ');
// - Add two new words in the strings array "called" and "sentance"
strings.push('called','sentance');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(' ');

// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
let filterIS=strings.filter(word => word.includes('is'));
// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
// let divisibleby3=(value) => value%3 === 0;
// console.log(numbers.every(divisibleby3));
 let res=numbers.every(value => value%3 === 0);
 console.log(res);
// -  Sort Array from smallest to largest
numbers.sort(function(a, b){return a-b});
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largest=0;
for(let num of numbers){
  if(num>largest){
    largest=num;
  }
}
console.log(largest);
// - Find longest string in strings
let longestWord=strings.sort(function(a, b) { 
  return b.length - a.length;
});
console.log(longestWord[0]);
// - Find all the even numbers
numbers.forEach(value =>{
  if(value%2==0){
    console.log(value);
  }
})
// - Find all the odd numbers
numbers.forEach(value =>{
  if(value%2!=0){
    console.log(value);
  }
})
// - Place a new word at the start of the array use (unshift)
strings.unshift('Arun');
// - Make a subset of numbers array [18,9,7,11]
console.log(cloneedArray.slice(3,7));
// - Make a subset of strings array ['a','collection']
console.log(cloneedStrings.slice(2,4));
// - Replace 12 & 18 with 1221 and 1881
let index12=cloneedArray.indexOf(12);
cloneedArray[index12]=1221;
let index18=cloneedArray.indexOf(18);
cloneedArray[index18]=1881;

// - Replace words in strings array with the length of the word
let strIndex1=cloneedStrings.indexOf('words');
cloneedStrings[strIndex1]=cloneedStrings[strIndex1].length;
// - Find the sum of the length of words using above question
let wordsum=0;
let wordsLength='words'.length;
for(let i=0 ;i<wordsLength;i++){
  wordsum+=i;
}

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
for(let i=0;i<customers.length;i++){
  if(customers[i].firstname[0]== 'J'){
    console.log(customers[i].firstname);
  }
}
// - Create new array with only first name
let newarr1=[];
for(let i=0;i< customers.length;i++){
  newarr1.push(customers[i].firstname);
}
// - Create new array with all the full names (ex: "Joe Blogs")
let newarr2=[];
for(let i=0;i< customers.length;i++){
  newarr2.push(customers[i].firstname +' '+customers[i].lastname);
}
// - Sort the array created above alphabetically
newarr2.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowels=['a','e','i','o','u'];
let vowelarr=[];
for(let i=0;i<customers.length;i++){
  if(vowels.includes(customers[i].firstname)){
    vowelarr.push(customers[i].firstname);
  }
}