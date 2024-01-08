/**
 *? Деструктуризацией с значениями по умолчанию. Пример без нового синтаксиса
 */

function processApplicationOld(applicationData) {
  var name = applicationData[0];
  var age = applicationData[1] || 18;
  var preferredLanguage = applicationData[2] || "английский";

  console.log(
    `Имя: ${name}, Возраст: ${age}, Язык: ${preferredLanguage}`
  );
}

processApplicationOld(["Мария", 23, "испанский"]); // Имя: Мария, Возраст: 23, Язык: испанский
processApplicationOld(["Иван"]); // Имя: Иван, Возраст: 18, Язык: английский
processApplicationOld(["Елена", , "немецкий"]); // Имя: Елена, Возраст: 18, Язык: немецкий
