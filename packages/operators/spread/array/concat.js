{
  var array1 = [1, 2, 3];
  var array2 = [4, 5, 6];
  var combinedArray = array1.concat(array2);

  console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
}

{
  var array1 = [1, 2, 3];
  var array2 = [4, 5, 6];
  for (var i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
}

// Вариант с использованием Spread оператора
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];