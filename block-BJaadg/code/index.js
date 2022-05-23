// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs=quote.indexOf('is');
/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
console.log(quote.charAt(indexOfIs));
/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`The index of first is in quote is ${quote.charAt(indexOfIs  )}`);
/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
  for(let i=0;i<6;i++){
  console.log(`The character at index ${i} is ${quote.charAt(i)}`);
    
  }
/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
let sen=from.concat(' ','said',' ',quote,' ','to', ' ',to);
console.log(sen);
/*
6. Does from, to and quote ends with "rk". Check all three.
*/
console.log(from.endsWith('rk'));
console.log(quote.endsWith('rk'));
console.log(to.endsWith('rk'));

/*
7. Does quote includes the word "Only"
*/
console.log(quote.includes('Only'));
/*
8. Does quote includes the word " we"
*/
console.log(quote.includes('we'));

/*
9. Find the index of the the word `we` in quote
*/
console.log(quote.indexOf('we'));

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted=quote.split(' ');
console.log(quoteSplitted);
/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
let index=quoteSplitted.indexOf('today');
quoteSplitted[index]='tomorrow';
console.log(quoteSplitted.join(' '));
/*
12. Find the index of second "o" in quote. Use indexOf
*/
console.log(quote.indexOf('o',8));
/*
13. Find the last index of letter "a" in quote.
*/
let lastIndexOfA=quote.lastIndexOf('a');
console.log(lastIndexOfA);

/*
14. Find the second last index of letter "a" in quote.
*/
console.log(quote.lastIndexOf('a',lastIndexOfA-1));

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/
let max=70;
let length=quote.length;
// for(let i=length;i<=max;i++){
//   quote=quote+'.';
//   length=quote.length;
// }
let newQuote=quote + '.'.repeat(max-length);
/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/
let newStartQuote= '.'.repeat(max-length)+quote;
/*
17. Log the repeat of "Hello World!" 10 times.
*/
console.log('Hello World'.repeat(10));
/*
18. Replace today to tomorrow in quote.
*/
console.log(quote.replace('today','tomorrow'));
/*
19. Replace Stark to Lannister in quoteTo
*/
quote.replace('Stark','Lannister');

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
console.log(quote.slice(0,30)+'...');
/*
21. Find out does quote, from, to starts with "A"
*/
console.log(quote.startsWith('A'));
console.log(from.startsWith('A'));
console.log(to.startsWith('A'));

