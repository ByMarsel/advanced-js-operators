/**
 * ? Деструктуризация объекта в параметрах функции
 */

function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}
greet({ name: "Alice", age: 30 });


function setOptions({ width = 100, height = 100, color = "black" } = {}) {
  console.log(`Width: ${width}, Height: ${height}, Color: ${color}`);
}

setOptions({ width: 200 }); // Выводит "Width: 200, Height: 100, Color: black"
setOptions(); // Выводит "Width: 100, Height: 100, Color: black"
