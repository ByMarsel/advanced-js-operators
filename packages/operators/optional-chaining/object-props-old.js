// ? Optional chaining. Без использования оператора optional chaining

const user = { name: "Alice", details: { age: 25 } };

// Без использования оператора optional chaining
// Для доступа к age нам нужно сначала проверить, существует ли объект details
let age;
if (user.details) {
  age = user.details.age; // 25
} else {
  age = undefined;
}

// Аналогично для gender, но так как gender не существует в объекте, результат будет undefined
let adress;
let house;
if (user.details) {
  adress = user.details.adress; // undefined

  if (adress) {
    house = adress.house; // undefined
  }
} else {
  adress = undefined;
}

console.log(age); // 25
console.log(adress); // undefined
console.log(house); // undefined
