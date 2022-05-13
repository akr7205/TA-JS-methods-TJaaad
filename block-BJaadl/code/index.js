let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm'
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let findLongestWord=[...words].sort((a,b) =>{
  return b.length - a.length;
});
console.log(findLongestWord[0]);
// - Convert the above array "words" into an array of length of word instead of word.
let lengthWords=[];
for(let word of words){
  lengthWords.push(word.length);
}
// - Create a new array that only contains word with atleast one vowel.
let vowelarr=[];
let vowels=['a','e','i','o','u'];
for(let word of words){
  for(let char of word){
    if(vowels.includes(char)){
      vowelarr.push(word);
      break;
    }
  }
};
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));
// - Create a new array that contians words not starting with vowel.
let notVowel=[];
for(let word of words){
  if(vowels.includes(word[0])== false){
    notVowel.push(word);
  }
}
// - Create a new array that contianse words not ending with vowel
let notEndVowel=[];
for(let word of words){
  if(vowels.includes(word[word.length-1]) == false){
    notEndVowel.push(word);
  }
}

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sum=0;
function sumArray(numbers){
  for(let num of numbers){
    sum+=num;
  }
  return sum;
}
console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyBy3=numbers.filter(num => num%3 == 0 );
// - Create a new array that contains only even numbers
let even=numbers.filter(num => num%2 == 0 );

// - Create  a new array that contains only odd numbers.
let odd=numbers.filter(num => num%2 != 0 );

// - Create a new array that should have true for even number and false for odd numbers.
let OddEven=numbers.map(num => num %2 == 0);
// - Sort the above number in assending order.
numbers.sort((a,b) => {
  return a-b;
});
// - Does sort mutate the original array?
// yes
// - Find the sum of the numbers in the array.
let arraySum=numbers.reduce((totalsum,num)=>{
  return totalsum+num;
},0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageNumbers=(numbers)=>{
  return arraySum/numbers.length;
}
console.log(averageNumbers(numbers));

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(strings){
  let wordlengthsum=0;
  for(let str of strings){
    wordlengthsum+= str.length;
  }
  return wordlengthsum/strings.length;
}
console.log(averageWordLength(strings));