// Объявление функции с параметрами по умолчанию и rest-параметром
function sum(first = 0, second = 0, ...others) {
  return first + second + others.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Выводит 10
console.log(sum()); // Выводит 0
