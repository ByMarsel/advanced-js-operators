/**
 * ? Объединение массивов с помощью Spread оператора
 */

// Вариант с использованием Spread оператора
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combinedArray = [...array1, ...array2, ...array3];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Пример использования в проекте Todolist
// ../packages/todolist/controllers/storage-controller.js#L55