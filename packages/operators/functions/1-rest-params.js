/**
 * ? Параметры по умолчаню и Rest оператор в функциях
 */

// Объявление функции с параметрами по умолчанию и rest-параметром
function sum(first = 0, second = 0, ...others) {
  return first + second + others.reduce((acc, curr) => acc + curr, 0);
}

// У стрелочных функций нет arguments, но есть альтернатива в виде rest-параметра
const sumArrow = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4)); // Выводит 10
console.log(sum()); // Выводит 0
сonsole.log(sumArrow(1, 2, 3, 4)); // Выводит 10
