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

// С помощью опциональной цепочки можно сделать то же самое, но короче
user.greet?.(); // Выводит "Hello!"
user.sayGoodbye?.(); // Ничего не происходит, но и ошибки нет
