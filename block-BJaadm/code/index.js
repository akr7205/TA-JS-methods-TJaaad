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

// Create an array peopleName and store value of sex key from persons array
let peopelName=persons.map(person => person.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.map(person => person.grade)
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.map(person => `${person.name} ${person.sex}`)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
// for(let person of persons){
//   if(person.name.startsWith('J') || person.name.startsWith('P')){
//     console.log(person.name);
//   }
// }
console.log(peopelName.filter(name => name.startsWith('J')||name.startsWith('P') ));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
// for(let person of persons){
//   if(person.name.startsWith('A') || person.name.startsWith('C')){
//     console.log(person.name.length);
//   }
// }
console.log(peopelName.filter(name => name.startsWith('A')||name.startsWith('C') ).length );

// Log all the filtered male ('M') in persons array
persons.filter(person => {
  if(person.sex == 'M'){
    console.log(person.name);
  }
});
// Log all the filtered female ('F') in persons array
persons.filter(person => {
  if(person.sex == 'F'){
    console.log(person.name);
  }
});
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons.filter(person => {
  if(person.sex == 'F' && (person.name.startsWith('C') || person.name.startsWith('J'))){
    console.log(person.name);
  }
});
// Log all the even numbers from peopleGrade array
persons.map(person =>{
  if(person.grade%2==0){
    console.log(person.grade);
  }
})
// Find the first name that starts with 'J' in persons array and log the object
console.log( persons.find(person => person.name.startsWith('J')) );
// Find the first name that starts with 'P' in persons array and log the object
console.log( persons.find(person => person.name.startsWith('P')) );

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find(person =>
  person.name.startsWith('J') && person.grade>10 && person.sex == 'F'  ))
    
// Filter all the female from persons array and store in femalePersons array
let femalePersons=persons.filter(person => person.sex === 'F');
// Filter all the male from persons array and store in malePersons array
let malePersons= persons.filter(person => person.sex === 'M');
// Find the sum of all grades and store in gradeTotal
let gradeTotal= persons.reduce((sum,person) => {
  return sum+person.grade;
},0);
// Find the average grade
let averageGrade= gradeTotal/peopleGrade.length;
// Find the average grade of male
let GradeMaleTotal=malePersons.reduce((average,person) => {
 return average+person.grade;
},0)
let averageMaleGrade= GradeMaleTotal /malePersons.length;
// Find the average grade of female
let GradeFeMaleTotal=femalePersons.reduce((average,person) => {
  return average+person.grade;
 },0)
 let averageFeMaleGrade= GradeFeMaleTotal / femalePersons.length;
// Find the highest grade
let highestGrade=[...persons].sort((a,b) => a.grade - b.grade ).pop();
// Find the highest grade in male
let MalehighestGrade=[...malePersons].sort((a,b) => a.grade - b.grade ).pop();

// Find the highest grade in female
let FemalehighestGrade=[...femalePersons].sort((a,b) => a.grade - b.grade ).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeJP=persons.filter(person =>{
 return person.name.startsWith('J') || person.name.startsWith('P'); 
}).reduce((maxGrade,person) => {
  if(person.grade > maxGrade){
    maxGrade= person.grade;
  }
  return maxGrade;
},0)
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
// peopleGrade.sort((a,b) =>{
//   return a -b;
// });
//yes
// Sort the peopleGrade in descending order
// peopleGrade.sort((a,b)=>{
//   return b-a;
// })
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let NewpeopleGrade=[...peopleGrade].sort((a,b)=>{
    return b-a;
});
// Sort the array peopelName in ascending `ABCD..Za....z`
peopelName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let NewpeopleName=[...peopelName].sort();