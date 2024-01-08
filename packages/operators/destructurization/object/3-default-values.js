/**
 *? Деструктуризация объектов с установкой значений по умолчанию
 */

const person = { name: "Алексей", age: 30, adress: null };

// Деструктуризация с значениями по умолчанию
const { name, age, profession = "неизвестно" } = person;

console.log(name); // 'Алексей'
console.log(age); // 30
console.log(profession); // 'неизвестно'