/**
 * ? Деструктуризация объекта с переименованием. Без нового синтаксиса.
 */

const user = {
  name: "Алексей",
  age: 30,
  email: "alexey@example.com",
};

const userName = user.name;
const userAge = user.age;
const userEmail = user.email;
console.log(userName, userAge, userEmail); // Алексей 30 axlexey@example
