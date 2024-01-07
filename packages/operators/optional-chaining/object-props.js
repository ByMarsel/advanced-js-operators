var user = { name: 'Alice', details: { age: 25 } };

// Без использования оператора optional chaining
// Для доступа к age нам нужно сначала проверить, существует ли объект details
var age;
if (user.details) {
    age = user.details.age; // 25
} else {
    age = undefined;
}

// Аналогично для gender, но так как gender не существует в объекте, результат будет undefined
var gender;
if (user.details) {
    gender = user.details.gender;
} else {
    gender = undefined;
}


// С использованием оператора optional chaining
let age = user.details?.age; // 25
let gender = user.details?.gender; // undefined, без ошибки
