// ? Optional chaining c массивами. Без использования оператора optional chaining

const nullArray = null;
const array = [1, 2, 3];

// Проверяем, является ли nullArray массивом, и пытаемся получить первый элемент, если это так
let item;
if (nullArray && Array.isArray(nullArray)) {
    item = nullArray[0];
} else {
    item = undefined;
}

let item2;
if (array && Array.isArray(array)) {
    item2 = array[0];
}

console.log(item); // undefined
console.log(item2); // 1

