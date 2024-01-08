/**
 *? Деструктуризацией с значениями по умолчанию
 */

function processApplication(applicationData) {
  const [name, age = 18, preferredLanguage = "английский"] = applicationData;

  console.log(
    `Имя: ${name}, Возраст: ${age}, Язык: ${preferredLanguage}`
  );
}

processApplication(["Мария", 23, "испанский"]); // Имя: Мария, Возраст: 23, Язык: испанский
processApplication(["Иван"]); // Имя: Иван, Возраст: 18, Язык: английский
processApplication(["Елена", , "немецкий"]); // Имя: Елена, Возраст: 18, Язык: немецкий


//! Будьте внимательны: значения по умолчанию используются только для undefined!
const [one = 1, first = 2, third = 3, fourth = 4, fifth = 5] = [
  null,
  0,
  "",
  undefined,
];

console.log('Пример с undefined:'); // null 0 "" 4 5
console.log(one, first, third, fourth, fifth); // null 0 "" 4 5
