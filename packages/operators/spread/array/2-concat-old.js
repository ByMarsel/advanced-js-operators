/**
 * ? Объединение массивов без нового синтаксиса
 */

{
  var array1 = [1, 2, 3];
  var array2 = [4, 5, 6];
  var array3 = [7, 8, 9];

  var combinedArray = array1.concat(array2, array3);

  console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

{
  var array1 = [1, 2, 3];
  var array2 = [4, 5, 6];
  var array3 = [7, 8, 9];

  const combinedArray = [];

  for (const i = 0; i < array1.length; i++) {
    combinedArray.push(array1[i]);
  }

  for (const i = 0; i < array2.length; i++) { 
    combinedArray.push(array2[i]);
  }

  for (const i = 0; i < array3.length; i++) { 
    combinedArray.push(array3[i]);
  }


  console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}