let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let TotalGrade = persons.reduce((grade,person) =>{
  return grade+person.grade;
},0);
let averageGrade=TotalGrade/persons.length;
// Find the average grade of male
let MalePerson=persons.filter(person=>person.sex=='M');
let TotalMaleGrade=MalePerson.reduce((totalgrade,person) =>{
     return totalgrade+person.grade;
},0);
let MaleaverageGrade=TotalMaleGrade/MalePerson.length;
// Find the average grade of female
let FeMalePerson=persons.filter(person=>person.sex=='F');
let TotalFeMaleGrade=MalePerson.reduce((totalgrade,person) =>{
     return totalgrade+person.grade;
},0);
let FeMaleaverageGrade=TotalMaleGrade/FeMalePerson.length;
// Find the highest grade
let HighestGrade = persons.map((person) => person.grade).sort((a,b) => {
  return a-b;
}).pop();

// Find the highest grade in male
let HighestGradeMale=MalePerson.map((person) => person.grade).sort((a,b) => {
  return a-b;
}).pop();
// Find the highest grade in female
let HighestGradeFeMale= FeMalePerson.map((person) => person.grade).sort((a,b) => {
  return a-b;
}).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let HighestGradeJP= persons.filter(person => person.name.startsWith('J') || person.name.startsWith('P')).reduce((highGrade,person)=>{
  if(person.grade>highGrade){
    highGrade=person.grade;
  }
 return highGrade;
},0);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];
  
/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = fruitBasket.reduce((acc , cv)=>{
  if(acc[cv]){
   acc[cv] = acc[cv]+1; 
  }
  else {
    acc[cv] = 1;
  }
  return acc;
},{});
console.log(fruitsObj);
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let output = Object.keys(fruitsObj).reduce((acc , cv)=> {

  acc = acc.concat([[cv,fruitsObj[cv]]]) ;
  
  return acc;
},[]);
console.log(output);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

let flatarr=data.reduce((acc , cv)=>{
acc=acc.concat(cv);
return acc;
},[])
// Using reduce flat data array

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let flatarr1=dataTwo.reduce((acc , cv)=>{
  acc=acc.concat(cv.flat(Infinity));
  return acc;
  },[])
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/



/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
function increment(num){
  return num+1 ;
}
function double(num){
 return num*2 ;
}
function decrement(num){
 return num-1 ;
}

function triple(num){
 return num*3 ;
}
function half(num){
 return Math.round( num / 2) ;
}
let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];
let result=pipeline.reduce((acc,cv) =>{
  acc=cv(acc);
  return acc;
},3);
let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
let result1=pipeline2.reduce((acc,cv) =>{
  acc=cv(acc);
  return acc;
},3);