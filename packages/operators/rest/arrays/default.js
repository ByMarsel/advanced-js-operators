/**
 * ? Оператор rest с массивами
 */
const numbers = [1, 2, 3, 4, 5];

// С помощью rest оператора можно сделать то же самое, но проще
// Использование rest оператора для разделения массива
const [first, second, ...rest] = numbers;

console.log(first); // выводит 1
console.log(second); // выводит 2
console.log(rest); // выводит [3, 4, 5]
