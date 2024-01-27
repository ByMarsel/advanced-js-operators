/**
 * ? Расширение массива без нового синтаксиса
 */

{
  var array = [1, 2, 3, 5];
  array.push(5);
}

{
  var array = [1, 2, 3, 5].concat(5);
}

{
  var myArray = [2, 3, 4];
  myArray.unshift(1);
}

{
 
  var array1 = [1, 2, 3];
  var array2 = [4, 5, 6];
  var array3 = [7, 8, 9];
  var num = 4;
  var combinedArray = [];

  // Массив уникальных значений без Spread оператора
  var combinedArray = new Set(combinedArray.concat(array1, num, array2, array3));
  combinedArray = Array.from(combinedArray);
}