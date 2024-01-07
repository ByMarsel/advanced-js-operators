// Параметры по умолчанию в функциях
function createPerson(name = "Anonymous", age = 0) {
  return { name, age };
}

console.log(createPerson()); // Выводит {name: "Anonymous", age: 0}
console.log(createPerson("Alice", 30)); // Выводит {name: "Alice", age: 30}
