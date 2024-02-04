// ? Optional chaining. Без использования оператора optional chaining

const user = { name: "Alice", details: { age: 25 } };

// Без использования оператора optional chaining
// Для доступа к age нам нужно сначала проверить, существует ли объект details
let age;
if (typeof user.details.age === "number") {
  age = user.details.age; // 25
} else {
  age = undefined;
}

// Аналогично для address, но так как address не существует в объекте, результат будет undefined
let house;

if (user.details.address) {
  house = user.details.address.house; // undefined
} else {
  house = undefined;
}

console.log(age); // 25
console.log(house); // undefined
