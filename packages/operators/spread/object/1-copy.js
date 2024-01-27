/**
 * ? Копирование объекта с помощью Spread
 */


const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject }; // { a: 1, b: 2 }

// ! Обратите внимание что копирования верхнеуровневое

const originalObject2 = { a: 1, b: { c: 2 } };
const copiedObject2 = { ...originalObject2 }; // { a: 1, b: { c: 2 } }
copiedObject2.c = 3;

console.log(originalObject2); // { a: 1, b: { c: 3 } }

// Пример использования в проекте Todolist
// ../packages/todolist/controllers/storage-controller.js#L39