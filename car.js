let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue"
};

console.log("Original Object:");
console.log(car);

const keys = Object.keys(car);

delete car[keys[1]];

console.log("After deleting second property:");
console.log(car);

console.log("Number of properties:",
Object.keys(car).length);