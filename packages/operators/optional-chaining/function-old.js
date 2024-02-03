// ? Optional chaining c функциям. Без использования оператора optional chaining

const user = {
  greet: function () {
    console.log("Hello!");
  },
};

// Проверяем, существует ли метод greet в объекте user, и вызываем его, если он существует
if (typeof user.greet === "function") {
  user.greet(); // Выводит "Hello!"
}

// Проверяем, существует ли метод sayGoodbye в объекте user, но так как его нет, ничего не происходит
if (typeof user.sayGoodbye === "function") {
  user.sayGoodbye();
}
