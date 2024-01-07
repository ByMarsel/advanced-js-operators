const user = {
    name: "Алексей",
    age: 30,
    email: "alexey@example.com"
};

// Пример до ES6+
{
    const name = user.name;
    const age = user.age;
    const email = user.email;

    console.log(name, age, email); // Алексей 30 axlexey@example
}

// Пример с деструктуризацией
const { name, age, email } = user;

console.log(name, age, email); // Алексей 30 alexey@example.com