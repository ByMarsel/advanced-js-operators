/**
 * ? Nullish Coalescing Operator
 */

const userName = null;
const userName2 = "John";
const defaultName = userName ?? "Guest";
const defaultName2 = userName2 ?? "Guest";

console.log(defaultName); // "Guest"
console.log(defaultName2); // "John"