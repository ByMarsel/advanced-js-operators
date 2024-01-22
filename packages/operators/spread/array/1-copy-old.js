/**
 * ? Копирование массива c помощью Spread оператора. Без нового синтаксиса. 
 */

{
  var originalArray = [1, 2, 3];
  var copiedArray = originalArray.slice(); // копирует весь массив
}

{
  var originalArray = [1, 2, 3];
  var copiedArray = [].concat(originalArray); // также копирует весь массив
}

{
  var originalArray = [1, 2, 3];
  var copiedArray = Array.from(originalArray); // копирует весь массив
}

{
  var originalArray = [1, 2, 3, 4];
  var copiedArray = [];
  for (var i = 0; i < originalArray.length; i++) {
    copiedArray[i] = originalArray[i];
  }
}