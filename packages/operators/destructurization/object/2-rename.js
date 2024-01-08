/**
 * ? Именование свойств объекта при деструктуризации
 */

const user = {
  name: "Алексей",
  age: 30,
  email: "alexey@example.com",
};

// Вариант с деструктуризацией
const { name: userName, age: userAge, email: userEmail } = user;

console.log(userName, userAge, userEmail);
