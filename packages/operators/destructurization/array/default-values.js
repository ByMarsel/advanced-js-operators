// Пример с деструктуризацией и значениями по умолчанию до ES6+
function processApplication(applicationData) {
    var name = applicationData[0];
    var age = applicationData[1] || 18;
    var preferredLanguage = applicationData[2] || "английский";

    console.log(`Имя: ${name}, Возраст: ${age}, Язык: ${preferredLanguage}`);
}

// Пример с деструктуризацией и значениями по умолчанию
function processApplication(applicationData) {
    const [name, age = 18, preferredLanguage = "английский"] = applicationData;

    console.log(`Имя: ${name}, Возраст: ${age}, Язык: ${preferredLanguage}`);
}

// Пример данных заявок
processApplication(["Мария", 23, "испанский"]); // Имя: Мария, Возраст: 23, Язык: испанский
processApplication(["Иван"]); // Имя: Иван, Возраст: 18, Язык: английский
processApplication(["Елена", , "немецкий"]); // Имя: Елена, Возраст: 18, Язык: немецкий

// Будьте внимательны значения по умолчанию используются только для undefined
const [one = 1, first = 2, third = 3, fourth = 4, fifth = 5] = [null, 0, "", undefined];
console.log(one, first, third, fourth, fifth); // null 0 "" 4 5