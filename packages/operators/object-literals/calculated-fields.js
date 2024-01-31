/**
 * ? Вычисляемые поля в объектах
 */

const person = {
  name: "Alice",
  age: 25,
};

const property = "name";
const newPerson = {
  ...person,
  [property]: "Bob",
};

constole.log(newPerson); // { name: 'Bob', age: 25 }
