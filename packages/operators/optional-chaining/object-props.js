// ? Optional chaining 

const user = { name: 'Alice', details: { age: 25 } };

// С использованием оператора optional chaining
const age = user.details.age; // 25
const address = user.details.address; // undefined, без ошибки

const house = user.details.address?.house; // undefined, без ошибки

console.log(age); // 25
console.log(address); // undefined
console.log(house); // undefined
