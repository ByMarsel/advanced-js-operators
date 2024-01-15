/**
 * ? Копирование объекта без нового синтаксиса
 */

{
  var originalObject = { a: 1, b: 2, c: 3 };
  var copiedObject = Object.assign({}, originalObject); // копирует объект
}

{
  var originalObject = { a: 1, b: 2, c: { d: 3, e: 4 } };
  var copiedObject = {};

  for (var key in originalObject) {
    if (originalObject.hasOwnProperty(key)) {
      copiedObject[key] = originalObject[key];
    }
  }
}
