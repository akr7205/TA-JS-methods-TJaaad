Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
`````
const sentence = 'The quick ';
console.log(sentence.toUpperCase());
return- it will return string
`````
3. `toLowerCase`
const sentence = 'The quick ';
console.log(sentence.toLowerCase());
return- it will return string
4. `trim`
The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
const greeting = '   Hello world!   ';
console.log(greeting.trim());//"Hello world!"
return- it will return string
5. `trimEnd`
const greeting = '   Hello world!   ';
console.log(greeting.trimEnd());//"   Hello world!"
6. `trimStart`
const greeting = '   Hello world!   ';
console.log(greeting.trimStart());
"Hello world!   "
7. `concat`
The concat() method concatenates the string arguments to the calling string and returns a new string.
const str1 = 'Alok';
const str2 = 'sharma';
console.log(str1.concat(' ', str2));
console.log(str2.concat(' ', str1));
 "Alok sharma"
 "sharma Alok"
8. `endsWith`
The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
const str1 = 'Cats are';
console.log(str1.endsWith('are', 8));//true
const str2 = 'Is this a question';
console.log(str2.endsWith('?'));//false
9. `includes`
The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
let text = "Hello world, welcome to the universe.";
text.includes("world");//true
10. `indexOf`
The indexOf() method returns the position of the first occurrence of a value in a string.
The indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive.
let text = "Hello world, welcome to the universe.";
text.indexOf("welcome");//13

11. `lastIndexOf`
The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
let text = "Hello planet earth, you are a great planet.";
text.lastIndexOf("planet");//36

12. `padEnd`
The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
const str1 = 'hi';
console.log(str1.padEnd(25, '.'));//"hi......................."
const str2 = '200';
console.log(str2.padEnd(15));//"200            "
13. `padStart`
const str1 = '7';
console.log(str1.padStart(9, '0'));//"000000007"
14. `repeat`
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const chorus = 'Alt campus ';

console.log(chorus.repeat(5));//"Alt campus Alt campus Alt campus Alt campus Alt campus "
15. `replace`
let text = "Visit Microsoft!";
text.replace("Microsoft", "W3Schools");
'Visit W3Schools!'
16. `slice`
let text = "Hello world!";
text.slice(0,3);//Hel
17. `split`
let text = "How are you doing today?";
console.log( text.split(" "));//> Array ["How", "are", "you", "doing", "today?"]
return 
An Array of strings, split at each point where the separator occurs in the given string.
18. `substring`
const str = 'ALt campus';

console.log(str.substring(1, 3));//"Lt"
Return value
A new string containing the specified part of the given string.
