/**
 * ? Объединение массивов с помощью Spread оператора
 */

// Вариант с использованием Spread оператора
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Пример использования в проекте Todolist
// ../packages/todolist/controllers/storage-controller.js#L55