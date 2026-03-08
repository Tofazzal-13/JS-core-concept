const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven);

const users = [
  { id: 1, name: "Rahim", age: 20 },
  { id: 2, name: "Karim", age: 25 },
  { id: 3, name: "Hasan", age: 25 }
];

// filter
const age25Users = users.filter(user => user.age === 25);

// find
const firstAge25User = users.find(user => user.age === 25);

console.log(age25Users);
console.log(firstAge25User);