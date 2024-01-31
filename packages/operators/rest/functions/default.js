/**
 * ? Rest оператор в параметрах функции
 */

// Rest оператор в функциях
const multiplicate = (multiplicator, ...numbers) => {
  return numbers.map((n) => n * multiplicator);
}

console.log(multiplicate(2, 1, 2)); // [2, 4]
console.log(multiplicate(3, 2, 3, 4, 5)); // [6, 9, 12, 15]
console.log(multiplicate(5, ...[2, 3, 4, 5])); // [10, 15, 20, 25]
