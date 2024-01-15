/**
 * ? Расширение массива с помощью Spread оператора
 */

const numbers = [2, 3, 4];
const moreNumbers = [1, ...numbers, 5];

// Более сложный пример с использованием Spread оператора
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const array3 = [5, 6, 7];
const num =  4;

const combinedArray = [...new Set([...array1, num, ...array2, ...array3])];
