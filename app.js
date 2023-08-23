console.log("JavaScript lesson 1");

let userName = `Luka`;
userLastName = `Bliadze`;
userAge = 23;
userIq = 500;
isfemale = false;
isGeorgian = true;

console.log(userName, userLastName, userAge, userIq);
console.log(
  typeof userName,
  typeof userLastName,
  typeof userAge,
  typeof userIq,
  typeof isfemale,
  typeof isGeorgian
);

const myName = `Luka`;
const myHobby = `video games`;
const yearOfBirth = 2000;
const currentYear = 2023;

console.log(myName, myHobby, yearOfBirth, currentYear);
console.log(
  typeof myName,
  typeof myHobby,
  typeof yearOfBirth,
  typeof currentYear
);
console.log(
  `My name is ${myName}, I am ${
    currentYear - yearOfBirth
  } years old and my hobby is ${myHobby} `
);
console.log(
  `My name is` + ` ` + myName,
  `I am` +
    ` ` +
    (currentYear - yearOfBirth) +
    ` yers old and my hobby is` +
    ` ` +
    myHobby
);
