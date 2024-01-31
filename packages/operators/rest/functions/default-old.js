/**
 * ? Rest оператор в параметрах функции. Без нового синтаксиса
 */

// Rest оператор в функциях
function multiplicate() {
  const params = Array.prototype.slice.call(arguments);

  const nums = params.slice(1);
  return nums.map((n) => n * params[0]);
}

console.log(multiplicate(2, 1, 2)); // [2, 4]
console.log(multiplicate(3, 2, 3, 4, 5)); // [6, 9, 12, 15]
