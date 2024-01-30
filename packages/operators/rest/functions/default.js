/**
 * ? Rest оператор в параметрах функции
 */

// Rest оператор в функциях
const multiplicate = (multiplicator, ...numbers) => {
  return numbers.map((n) => n * multiplicator);
}

console.log(sum(2, 1, 2)); // [2, 4]
console.log(sum(3, 2, 3, 4, 5)); // [6, 9, 12, 15]
console.log(sum(5, ...[2, 3, 4, 5])); // [10, 15, 20, 25]
