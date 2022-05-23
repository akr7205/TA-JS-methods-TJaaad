// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
  // your code goes here
 let totalpeople= got.houses.reduce((totalpeople,house)=>{
    return totalpeople+=house.people.length;
  },0)
  return totalpeople;
}

function peopleByHouses() {
  // your code goes here
  return got.houses.reduce((acc,house) =>{
    acc[house.name]=house.people.length;
    return acc;
  },{})
  
}

function everyone() {
  // your code goes 
  return got.houses.reduce((acc,house)=>{
    house.people.forEach(person=>{
      acc.push(person.name);
    });
    return acc;
  },[]);
}

function nameWithS() {
  // your code goes here
  return got.houses.reduce((acc,house)=>{
   house.people.map(person=>{
     if( person.name.toLowerCase().includes('s')){
       acc.push(person.name);
     }
   })
   return acc;
  },[]);

}

function nameWithA() {
  // your code goes here
  return got.houses.reduce((acc,house)=>{
    house.people.map(person=>{
      if( person.name.toLowerCase().includes('a')){
        acc.push(person.name);
      }
    })
    return acc;
   },[]);
}

function surnameWithS() {
  // your code goes here
   // your code goes here
   let allPeople =everyone();
    return allPeople.reduce((acc,personname)=>{
      if(personname.split(" ")[1].toLowerCase().includes('s')){
        acc.push(personname);
      }
      return acc;
    },[]);
}

function surnameWithA() {
  // your code goes here
  let allPeople =everyone();
    return allPeople.reduce((acc,personname)=>{
      if(personname.split(" ")[1].includes('A')){
        acc.push(personname);
      }
      return acc;
    },[]);
}

function peopleNameOfAllHouses() {
  // your code goes here
  return got.houses.reduce((acc,house) =>{
   acc[house.name]=house.people.map(person => person.name);
   return acc;
  },{});
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
