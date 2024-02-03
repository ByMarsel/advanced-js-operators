// ? Optional chaining c массивами

const nullArray = null;
const array = [1, 2, 3];

// С использованием оператора optional chaining
const item = nullArray?.[0]; // undefined
const item2 = array?.[0]; // 1

console.log(item); // undefined
console.log(item2); // 1

