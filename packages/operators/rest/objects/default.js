/**
 * ? Rest оператор в деструктуризации объектов
 */

const person = {
  name: "Алексей",
  age: 30,
  country: "Россия",
  occupation: "Инженер",
};

// Деструктуризация с использованием rest оператора
const { name, age, ...otherInfo } = person;

console.log(name); // 'Алексей'
console.log(age); // 30
console.log(otherInfo); // { country: 'Россия', occupation: 'Инженер' }
