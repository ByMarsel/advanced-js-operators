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

// Верхнеуровневое копирование объекта с помощью Spread оператора
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject }; // { a: 1, b: 2 }
