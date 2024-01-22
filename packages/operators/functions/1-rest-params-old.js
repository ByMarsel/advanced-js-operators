/**
 * ? Параметны по умолчанию и Rest-параметры
 */

// Объявление функции без параметров по умолчанию и rest-параметров
function sum() {
    var first = arguments[0] !== undefined ? arguments[0] : 0;
    var second = arguments[1] !== undefined ? arguments[1] : 0;
    var others = Array.prototype.slice.call(arguments, 2);
    var total = first + second;
  
    for (var i = 0; i < others.length; i++) {
      total += others[i];
    }
  
    return total;
  }
  
  // Аналог стрелочной функции с использованием анонимной функции
  var sumArrow = function() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.reduce(function(acc, curr) {
      return acc + curr;
    }, 0);
  };
  
  console.log(sum(1, 2, 3, 4)); // Выводит 10
  console.log(sum()); // Выводит 0
  console.log(sumArrow(1, 2, 3, 4)); // Выводит 10
  