/**
 *?Деструктуризация вложенного объекта. Пример без нового синтаксиса.
 */

const user = {
  name: "Иван",
  age: 25,
  contact: {
    email: "ivan@example.com",
    phone: "1234567890",
  },
};

var name = user.name;
var email = user.contact.email;
var phone = user.contact.phone;

console.log(name, email, phone); // Иван ivan@example.com 1234567890
