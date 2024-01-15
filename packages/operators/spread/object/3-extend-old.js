/**
 * ? Расширение объекта без нового синтаксиса
 */

{
  var originalObject = { a: 1, b: 2 };
  var newProperties = { c: 3, d: 4 };
  Object.assign(originalObject, newProperties);
}

{
  var originalObject = { a: 1, b: 2 };
  originalObject.c = 3;
  originalObject.d = 4;
}

{
  var originalObject = { a: 1, b: 2 };

  Object.defineProperty(originalObject, "c", {
    value: 3,
  });

  Object.defineProperty(originalObject, "d", {
    value: 4,
  });
}
