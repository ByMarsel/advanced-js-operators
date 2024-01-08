/**
 *? Деструктуризация объекта. Без нового синтаксиса
 */

const user = {
  name: "Алексей",
  age: 30,
  email: "alexey@example.com",
};

const name = user.name;
const age = user.age;
const email = user.email;

console.log(name, age, email); // Алексей 30 axlexey@example
