/**
 * ? Расширение объекта с помощью Spread оператора
 */

const originalObject = { a: 1, b: 2 };
const extendedObject = { ...originalObject, d: 4 }; // { a: 1, b: 2, d: 4 }

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
    surname: "Новиков",
    city: "Москва",
  },
  hobbies: ["путешествия"],
};

let combined = {
  ...user,
  personalInfo: {
    ...user.personalInfo,
    ...updates.personalInfo,
    age: 31,
    email: "test@test.com",
  },
  hobbies: [...user.hobbies, ...updates.hobbies],
};

console.log(combined);
/**
 * {
 *   id: 12,
 *   personalInfo: {
 *     name: "Иван",
 *     surname: "Новиков",
 *     city: "Москва",
 *     age: 31,
 *     email: "test@test.com"
 *  },
 *  hobbies: ["футбол", "чтение", "путешествия"],
 * }
 */
