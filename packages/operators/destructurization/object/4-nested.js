/**
 * ? Деструктуризация вложенного объекта
 */

const user = {
  name: "Иван",
  age: 25,
  contact: {
    email: "ivan@example.com",
    phone: "1234567890",
  },
};

// Деструктуризация вложенного объекта
const {
  name,
  contact: { email, phone },
} = user;

console.log(name, email, phone); // Иван ivan@example.com 1234567890
