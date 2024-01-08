/**
 * ? Деструктуризация объектов с установкой значений по умолчанию. Без нового синтаксиса.
 */

const person = { name: "Алексей", age: 30 };

// Извлечение значений с установкой значений по умолчанию
const name = person.name;
const age = person.age;
const profession = person.profession || "неизвестно";

console.log(name); // 'Алексей'
console.log(age); // 30
console.log(profession); // 'неизвестно'
