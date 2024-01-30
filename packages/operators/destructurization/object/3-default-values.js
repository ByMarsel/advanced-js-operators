/**
 *? Деструктуризация объектов с установкой значений по умолчанию
 */

const printPerson = ({
  name,
  age,
  address = "Miami",
  profession = "неизвестно",
}) => {
  console.log(name, age, address, profession);
};

printPerson({ name: "Tom", age: 17 }); // Tom 17 Miami неизвестно
printPerson({ name: "Bob", age: 17, address: "New York" }); // Bob 17 New York неизвестно
printPerson({
  name: "Sam",
  age: 17,
  address: "New York",
  profession: "developer",
}); // Sam 17 New York developer
