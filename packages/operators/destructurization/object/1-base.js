/**
 *? Деструктуризация объекта
 */


const user = {
    name: "Алексей",
    age: 30,
    email: "alexey@example.com"
};

// Пример с деструктуризацией
const { name, age, email } = user;

console.log(name, age, email); // Алексей 30 alexey@example.com