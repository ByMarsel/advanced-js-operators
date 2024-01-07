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

// С помощью rest оператора можно сделать то же самое, но проще
// Использование rest оператора для разделения массива
const [first, second, ...rest] = numbers;

console.log(first); // выводит 1
console.log(second); // выводит 2
console.log(rest); // выводит [3, 4, 5]
