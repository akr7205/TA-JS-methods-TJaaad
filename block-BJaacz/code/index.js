// Test using EXAMPLE functions given below each function.

/*
  Create a function named addTwo which accepts a number, adds 2 to the number and return the new value.
*/
function addTwo(num) {
  return num + 2;
}
console.log(addTwo(5));
/*
  Create a function named addThree which accepts a number, adds 3 to the number and return the new value.
*/
function addThree(num) {
  return num + 3;
}
console.log(addThree(5));
/*
  Create a function named addFive which accepts a number, adds 5 to the number and return the new value.
*/
function addFive(num) {
  return num + 5;
}
console.log(addFive(5));
/*
  Create a function named addTwoToArray which accepts:
    - An array of numbers
    - Returns a new array where 2 is added to each element
    - While doing so use the funciton addTwo
*/
let num = [1, 2, 3, 4, 5];
function addTwoToArray(arr) {
  let finalarr = [];
  for (let i of arr) {
    finalarr.push(addTwo(i))
  }
  return finalarr;
}
// console.log(addTwoToArray(num));
/*
  Create a function named addThreeToArray which accepts:
    - an array of numbers
    - aeturns a new array where 3 is added to each element
    - while doing so use the funciton addThree
*/
function addThreeToArray(arr) {
  let vlaue = 2;
  let finalarr = [];
  for (let i of arr) {
    finalarr.push(addThree(i))
  }
  return finalarr;
}
console.log(addThreeToArray(num));
/*
  Create a function named addFiveToArray which accepts:
    - an array of numbers
    - aeturns a new array where 5 is added to each element
    - while doing so use the funciton addThree
*/
function addFiveToArray(arr) {
  let vlaue = 2;
  let finalarr = [];
  for (let i of arr) {
    finalarr.push(addFive(i));
  }
  return finalarr;
}
console.log(addFiveToArray(num));
/*
In above function addTwoToArray, addThreeToArray, addFiveToArray we are repeating the code, let's fix this.

  Create a function named changeArray which accepts two arguments:
    - an array of numbers
    - a callback function
    - pass each element of array to the callback function
    - and store the value returned from callback function in a new array
    - return the new array

  EXAMPLE:
    console.log(changeArray([1, 2, 3, 4, 5, 6], addTwo)); // [3, 4, 5, 6, 7, 8]
    console.log(changeArray([1, 2, 3, 4, 5, 6], addThree)); // [4, 5, 6, 7, 8, 9]
    console.log(changeArray([1, 2, 3, 4, 5, 6], addFive)); // [6, 7, 8, 9, 10, 11]
*/
function changeArray(arr, operation) {
  let finalarr = [];
  for (let i of arr) {
    finalarr.push(operation(i));
  }
  return finalarr;
}
console.log(changeArray([1, 2, 3, 4, 5, 6], addTwo)); // [3, 4, 5, 6, 7, 8]
console.log(changeArray([1, 2, 3, 4, 5, 6], addThree)); // [4, 5, 6, 7, 8, 9]
console.log(changeArray([1, 2, 3, 4, 5, 6], addFive));// [6, 7, 8, 9, 10, 11]
/*
  Create a function called sendMessage that accepts two arguments:
    - a string (message) and a function (callback).
    - it will return the result of the callback function called with the message as argument

  EXAMPLE:
    console.log(sendMessage("Hello", console.log));
    console.log(sendMessage("Hello Alert!", alert));
    console.log(sendMessage("Hello Prompt!", prompt));
*/
function sendMessage(string, callback) {
  return callback(string);
}
// console.log(sendMessage("Hello", console.log));
// console.log(sendMessage("Hello Alert!", alert));
// console.log(sendMessage("Hello Prompt!", prompt));
/*

 Create a function named `first` that accepts an argument a function (callback) and return the same function defination.

*/
function sum() {
  return a + b;
}
function first(callback) {
  return callback;
}
first(sum);
/*
 Create a function named `second`
  - Inside second create another function named `third` which accepts a number, adds 1 to it and returns it
  - Return the function defination (third) from the second function
  - Also write the required code to call the function
*/
function second() {
  function third(num) {
    return num + 1;
  }
  return third;
}
// console.log(second()(5));
let func = second();
func(5);
/*
 Write a function named `callMe` which 
  - accept a function (callback function) as argument.
  - Store the value returned by calling the callback function in a variable named `final`
  - return final varibale from the function.
  - also write the required code to call the function.
*/
function hello() {
  return 'hello';
}
function callme(cb) {
  let final = cb();
  return final;
}
console.log(callme(hello));
// Data Starts (Don't change this)
const people = [
  { name: 'John Doe', age: 16 },
  { name: 'Thomas Calls', age: 19 },
  { name: 'Liam Smith', age: 20 },
  { name: 'Jessy Pinkman', age: 18 },
];

const grades = [
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
];
// Data Ends

/*
  Create a function named isAdult which accepts:
    - an object
    - returns true or false based on the `age` property in the object is greater than 18 or not

  EXAMPLE:
    console.log(isAdult(people[0])); // false
    console.log(isAdult(people[1])); // true
    console.log(isAdult(people[2])); // true
*/
function isAdult(people) {
  return people.age > 18;
}
console.log(isAdult(people[0]));
console.log(isAdult(people[1]));
console.log(isAdult(people[2]));
/*
  Create a function named isMale which accepts:
    - an object
    - returns true or false based on the `sex` property in the object is `M` or not

  EXAMPLE:
    console.log(isMale(grade[0])); // true
    console.log(isMale(grade[1])); // false
    console.log(isMale(grade[2])); // true
*/
function isMale(male) {
  return male.sex == 'M';
}

/*
  Create a function named isFemale which accepts:
    - an object
    - returns true or false based on the `sex` property in the object is `F` or not

  EXAMPLE:
    console.log(isFemale(grade[0])); // false
    console.log(isFemale(grade[1])); // true
    console.log(isFemale(grade[2])); // false
*/
function isFemale(male) {
  return male.sex == 'F';
}
console.log(isFemale(grades[0])); // false
console.log(isFemale(grades[1])); // true
console.log(isFemale(grades[2])); // false
/*
  Create a function named isGradeA which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is greater than 12 or not

  EXAMPLE:
    console.log(isGradeA(grade[0])); // false
    console.log(isGradeA(grade[1])); // false
    console.log(isGradeA(grade[2])); // true
*/
function isGradeA(grade) {
  return grade.grade > 12;
}

/*
  Create a function named isGradeB which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is greater than 8 and less than or equal to 12 or not
  
  EXAMPLE:
    console.log(isGradeB(grade[0])); // true
    console.log(isGradeB(grade[1])); // true
    console.log(isGradeB(grade[2])); // false
*/
function isGradeB(grade) {
  return grade.grade >= 8 && grade.grade <= 12;
}

/*
  Create a function named isGradeC which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is less than or equal to 8  or not

  EXAMPLE:
    console.log(isGradeC(grade[0])); // true
    console.log(isGradeC(grade[1])); // false
    console.log(isGradeC(grade[2])); // false
*/
function isGradeC(grade) {
  return grade.grade <= 8;
}

/*
  Create a function named filterAdult which accepts:
    - an array of objects
    - returns a new array with the value of age greater than 18 or not
    - while doing so use the funciton isAdult you created earlier
  
  EXAMPLE:
    console.log(filterAdult(people));

  Output: 
    [
      { name: 'Thomas Calls', age: 19 },
      { name: 'Liam Smith', age: 20 },
    ];
*/
// 
function filterAdult(people) {
  let finalarr = [];
  for (let i of people) {
    if (isAdult(i) == true) {
      finalarr.push(i);
    }
  }
  return finalarr;
}

/*
  Create a function named filterMale which accepts:
    - an array of objects
    - returns a new array with the value of sex is `M` or not
    - while doing so use the funciton isMale you created earlier

  EXAMPLE:
    console.log(filterMale(grade));

  Output: 
    [
      { name: 'John', grade: 8, sex: 'M' },
      { name: 'Bob', grade: 16, sex: 'M' },
      { name: 'Johnny', grade: 2, sex: 'M' },
      { name: 'Ethan', grade: 4, sex: 'M' },
      { name: 'Donald', grade: 5, sex: 'M' },
    ];
*/
function filterMale(people) {
  let finalarr = [];
  for (let i of people) {
    if (isMale(i) == true) {
      finalarr.push(i);
    }
  }
  return finalarr;
}
// console.log(filterMale(grades));
/*
  Create a function named filterFemale which accepts:
    - an array of objects
    - returns a new array with the value of sex is `F` or not
    - while doing so use the funciton isFemale you created earlier

  EXAMPLE:
    cosnsole.log(filterFemale(grade));

  Output: 
    [
      { name: 'Sarah', grade: 12, sex: 'F' },
      { name: 'Paula', grade: 18, sex: 'F' },
      { name: 'Jennifer', grade: 13, sex: 'F' },
      { name: 'Courtney', grade: 15, sex: 'F' },
      { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/
function filterFemale(people) {
  let finalarr = [];
  for (let i of people) {
    if (isFemale(i) == true) {
      finalarr.push(i);
    }
  }
  return finalarr;
}
// console.log(filterFemale(grades));
/*
  Create a function named filterGradeA which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater than 12 or not
    - while doing so use the funciton isGradeA you created earlier

  
  EXAMPLE:
    console.log(filterGradeA(grade));

  Output: 
    [
      { name: 'Sarah', grade: 12, sex: 'F' },
      { name: 'Paula', grade: 18, sex: 'F' },
      { name: 'Jennifer', grade: 13, sex: 'F' },
      { name: 'Courtney', grade: 15, sex: 'F' },
      { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/
function filterGradeA(grades) {
  let finalarr = [];
  for (let i of grades) {
    if (isGradeA(i) == true) {
      finalarr.push(i);
    }
  }
  return finalarr;
}
// console.log(filterGradeA(grades));
/*
  Create a function named filterGradeB which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater than 8 and less than or equal to 12 or not
    - while doing so use the funciton isGradeB you created earlier

  EXAMPLE:
    console.log(filterGradeB(grade));

  Output: 
    [
     { name: 'Sarah', grade: 12, sex: 'F' },
     { name: 'Johnny', grade: 2, sex: 'M' },
     { name: 'Ethan', grade: 4, sex: 'M' },
     { name: 'Donald', grade: 5, sex: 'M' },
     { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/
function filterGradeB(grades) {
  let finalarr = [];
  for (let i of grades) {
    if (isGradeB(i) == true) {
      finalarr.push(i);
    }
  }
  return finalarr;
}
// console.log(filterGradeB(grades));
/*
  Create a function named filterGradeC which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater less or equal to 8 or not
    - while doing so use the funciton isGradeC you created earlier

  EXAMPLE:
    console.log(filterGradeC(grade));

  Output: 
     [
      { name: 'John', grade: 8, sex: 'M' },
      { name: 'Johnny', grade: 2, sex: 'M' },
      { name: 'Ethan', grade: 4, sex: 'M' },
      { name: 'Donald', grade: 5, sex: 'M' },
    ]
*/
function filterGradeC(grades) {
  let finalarr = [];
  for (let i of grades) {
    if (isGradeC(i) == true) {
      finalarr.push(i);
    }
  }
  return finalarr;
}
console.log(filterGradeC(grades));
/*
We are repeating lots of code in above functions like filterGradeC, filterGradeB, filterGradeA, filterAdult. We will fix
this by making a higher order function named filter. Now using one function filter we will be able to filter anything we want.
filter is a higher order function.

  Create a function named filter which accepts:
    - an array of objects
    - a callback function (which should return true or false)
    - call the callback function with each object of array
    - if callback function returns true add to new array otherwise don't
    - returns a new array

  EXAMPLE:
    console.log(filter(people, isAdult));
    console.log(filter(grade, isMale));
    console.log(filter(grade, isFemale));
    console.log(filter(grade, isGradeA));
    console.log(filter(grade, isGradeB));
    console.log(filter(grade, isGradeC));
*/
function filter(arr, cb) {
  let finalarr = [];
  for (let i of arr) {
    if (cb(i) == true) {
      finalarr.push(i);
    }
  }
  return finalarr;
}
console.log(filter(people, isAdult));
console.log(filter(grades, isMale));
console.log(filter(grades, isFemale));
console.log(filter(grades, isGradeA));
console.log(filter(grades, isGradeB));
console.log(filter(grades, isGradeC));
/*
  Create a function named multiplyBy which accepts:
    - a number (num)
    - and returns a function
    - returned function accepts another number (num2) and return num * num2

  EXAMPLE:
    let multiplyByFive = multiplyBy(5);
    console.log(multiplyByFive(10)); // 50
    console.log(multiplyByFive(20)); // 100
    console.log(multiplyByFive(5)); // 25

    
    let multiplyByNine = multiplyBy(9);
    console.log(multiplyByFive(10)); // 90
    console.log(multiplyByFive(20)); // 180
    console.log(multiplyByFive(5)); // 45
*/
function multiplyBy(num) {
  return function (num2) {
    return num * num2;
  }

}
let multiplyByFive = multiplyBy(5);
console.log(multiplyByFive(10)); // 50
console.log(multiplyByFive(20)); // 100
console.log(multiplyByFive(5)); // 25