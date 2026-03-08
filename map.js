const numbers = [1, 3, 5, 9];

/* const doubled = [];
for(const num of numbers){
    doubled.push(num * 2);
} */

/* const doubledIt = num => num * 2; 
const doubled = numbers.map(doubledIt) */

const doubled = numbers.map(num => num * 2)
const friends = ["zahir", "alvi", "sobuz", "emon"];
const firstLetter = friends.map(frnd => frnd[0]);
console.log(firstLetter);


console.log(doubled);


const products = [
    {name: "laptop", price: 450000},
    {name: "phone", price: 54000},
    {name: "tablet", price: 25000}
]

const price = products.map(pd => pd.price * 2)
console.log(price);

const names = products.map(pd => {
    const upperCaseName = pd.name.toUpperCase();
    return upperCaseName;
})


console.log(names);

