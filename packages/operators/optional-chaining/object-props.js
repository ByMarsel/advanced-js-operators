// ? Optional chaining 

const user = { name: 'Alice', details: { age: 25 } };

// С использованием оператора optional chaining
const age = user.details?.age; // 25
const adress = user.details?.adress; // undefined, без ошибки
const house = user.details?.adress?.house; // undefined, без ошибки

console.log(age); // 25
console.log(adress); // undefined
console.log(house); // undefined
