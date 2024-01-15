/**
 * ? Копирование объекта с помощью Spread
 */


const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject }; // { a: 1, b: 2 }

// ! Обратите внимание что копирования верхнеуровневое, а не глубокое