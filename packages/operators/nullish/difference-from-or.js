/**
 * ? Nullish Coalescing Operator отличие от ||
 */

const count = 0;

console.log(count || 10); // Выводит 10, так как 0 считается "ложным"
console.log(count ?? 10); // Выводит 0, так как count не равен null/undefined
console.log(Boolean(count)) // Выводит false, так как 0 считается "ложным"

const nullObject = null;

console.log(nullObject || { hello: "world" }); // Выводит { hello: "world" }, так как nullObject равен null
console.log(nullObject ?? { hello: "world" }); // Выводит { hello: "world" }, так как nullObject равен null
console.log(Boolean(nullObject)) // Выводит false, так как null считается "ложным"


const emptyString = "";

console.log(emptyString || "Hello world"); // Выводит "Hello world", так как emptyString считается "ложным"
console.log(emptyString ?? "Hello world"); // Выводит "", так как emptyString не равен null/undefined
console.log(Boolean(emptyString)) // Выводит false, так как пустая строка считается "ложным"


const isFinished = false;

console.log(isFinished || true); // Выводит true, так как isFinished считается "ложным"
console.log(isFinished ?? true); // Выводит false, так как isFinished не равен null/undefined
console.log(Boolean(isFinished)) // Выводит false, так как false считается "ложным"

const notANumber = NaN;

console.log(notANumber || true); // Выводит true, так как notANumber считается "ложным"
console.log(notANumber ?? true); // Выводит NaN, так как notANumber не равен null/undefined
console.log(Boolean(notANumber)) // Выводит false, так как NaN считается "ложным"