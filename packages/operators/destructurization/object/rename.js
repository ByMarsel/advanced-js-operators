const user = {
  name: "Алексей",
  age: 30,
  email: "alexey@example.com",
};

// Вариант без деструктуризации
{
  const userName = user.name;
  const userAge = user.age;
  const userEmail = user.email;
  console.log(userName, userAge, userEmail); // Алексей 30 axlexey@example
}

// Вариант с деструктуризацией
const { name: userName, age: userAge, email: userEmail } = user;

console.log(userName, userAge, userEmail);
