const person = { name: "Алексей", age: 30 };

// Деструктуризация с значениями по умолчанию
const { name, age, profession = "неизвестно" } = person;

console.log(name); // 'Алексей'
console.log(age); // 30
console.log(profession); // 'неизвестно'

{
  // Извлечение значений с установкой значений по умолчанию
  const name = person.name;
  const age = person.age;
  const profession = person.profession || "неизвестно";

  console.log(name); // 'Алексей'
  console.log(age); // 30
  console.log(profession); // 'неизвестно'
}
