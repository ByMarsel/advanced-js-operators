/**
 * ? Объединение объектов с помощью Rest оператора
 */

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// Верхнеуровневое объединение объектов с помощью Spread оператора  
const combinedObject = { ...object1, ...object2 }; // { a: 1, b: 3, c: 4 }
// Обратите внимание что свойства объекта object2 перезаписывают свойства объекта object1

// Пример использования в проекте Todolist
// ../packages/todolist/controllers/storage-controller.js#L39