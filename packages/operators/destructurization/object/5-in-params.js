/**
 * ? Деструктуризация объекта в параметрах функции
 */

function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}
greet({ name: "Alice", age: 30 }); // Hello, my name is Alice and I'm 30 years old.