/**
 * ? Оператор rest с массивами. Без rest оператора
 */

const numbers = [1, 2, 3, 4, 5];

// Пример без rest оператора
// Использование slice для получения первых двух элементов
var firstItem = numbers[0];
var secondItem = numbers[1];

// Использование slice для получения оставшихся элементов
var rest = numbers.slice(2);

console.log(firstItem); // выводит 1
console.log(secondItem); // выводит 2
console.log(rest); // выводит [3, 4, 5]