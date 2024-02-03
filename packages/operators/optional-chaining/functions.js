// ? Optional chaining c функциям

const user = {
  greet: function () {
    console.log("Hello!");
  },
};

// С помощью опциональной цепочки можно сделать то же самое, но короче
user.greet?.(); // Выводит "Hello!"
user.sayGoodbye?.(); // Ничего не происходит, но и ошибки нет
