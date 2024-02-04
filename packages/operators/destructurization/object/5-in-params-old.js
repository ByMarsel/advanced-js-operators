/**
 * ? Деструктуризация объекта в параметрах функции. Без нового синтаксиса
 */

function greet(person) {
  const name = person.name;
  const age = person.age;

  console.log(`Hello, ${name}. You are ${age} years old.`);
}

console.log(
  greet({
    name: "John",
    age: 30,
  })
); // Hello, John. You are 30 years old.