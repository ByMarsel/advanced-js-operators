let nullArray = null;

// Проверяем, является ли nullArray массивом, и пытаемся получить первый элемент, если это так
var item;
if (nullArray && Array.isArray(nullArray)) {
    item = nullArray[0];
} else {
    item = undefined;
}

// С использованием оператора optional chaining
let item = nullArray?.[0]; // undefined

