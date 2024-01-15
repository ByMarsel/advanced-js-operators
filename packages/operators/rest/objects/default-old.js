/**
 * ? Rest оператор в деструктуризации объектов. Без нового синтаксиса
 */

const person = {
  name: "Алексей",
  age: 30,
  country: "Россия",
  occupation: "Инженер",
};

// Деструктуризация без Rest оператора
// Копирование всех свойств person в новый объект
var otherInfo = Object.assign({}, person);

// Извлечение определенных свойств и удаление их из копии
var name = otherInfo.name;
var age = otherInfo.age;
delete otherInfo.name;
delete otherInfo.age;

console.log(name); // 'Алексей'
console.log(age); // 30
console.log(otherInfo); // { country: 'Россия', occupation: 'Инженер' }
