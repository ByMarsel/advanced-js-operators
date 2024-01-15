/**
 * ? Расширение объекта с помощью Spread оператора
 */

const originalObject = { a: 1, b: 2 };
const newProperties = { c: 3, d: 4 };
const extendedObject = { ...originalObject, ...newProperties }; // { a: 1, b: 2, c: 3, d: 4 }

// Более сложный пример расширения объекта с помощью Spread оператора
let user = {
  id: 12,
  personalInfo: {
    name: "Иван",
    age: 30,
  },
  hobbies: ["футбол", "чтение"],
};

let updates = {
  personalInfo: {
    age: 31,
    email: "ivan_new@example.com",
  },
  hobbies: ["путешествия"],
};

let combined = {
  ...user,
  personalInfo: { ...user.personalInfo, ...updates.personalInfo },
  hobbies: [...user.hobbies, ...updates.hobbies],
};
