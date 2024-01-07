
// Вариант без rest оператора
function multiply() {
  var multiplier = arguments[0];
  var result = [];

  for (var i = 1; i < arguments.length; i++) {
    result.push(arguments[i] * multiplier);
  }

  return result;
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
console.log(multiply(3, 4, 5)); // [12, 15]

// Rest оператор в функциях
function multiplicate(multiplicator, ...numbers) {
  return numbers.map((n) => n * multiplicator);
}

console.log(sum(2, 1, 2)); // [2, 4]
console.log(sum(3, 2, 3, 4, 5)); // [6, 9, 12, 15]
console.log(sum(5, ...[2, 3, 4, 5])); // [10, 15, 20, 25]
