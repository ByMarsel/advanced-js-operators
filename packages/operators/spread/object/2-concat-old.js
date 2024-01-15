/**
 * ? Объединение объектов без нового синтаксиса
 */

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

{
  var combinedObject = Object.assign({}, object1, object2);
  // combinedObject: { a: 1, b: 3, c: 4 }
}

const combinedObject = {};
for (let key in object1) {
    		combinedObject[key] = object1[key];
}
for (let key in object2) {
    		combinedObject[key] = object2[key];
}
// combinedObject: { a: 1, b: 3, c: 4 }