/**
 * ? Копирование массива c помощью Spread оператора
 */

// Вариант с использованием Spread оператора
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3, 4]

// ! Обратите внимание что копирования верхнеуровневое

const originalArray2 = [1, 2, [3, 4]];
const copiedArray2 = [...originalArray2];

originalArray2[2][0] = 5;

console.log(copiedArray2); // [1, 2, [5, 4]]
console.log(originalArray2); // [1, 2, [5, 4]]

// Пример использования в проекте Todolist
// ../packages/todolist/controllers/storage-controller.js#L17