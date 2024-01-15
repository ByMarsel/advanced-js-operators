/**
 * ? Nullish Coalescing Operator отличие от ||
 */

const count = 0;

console.log(count || 10); // Выводит 10, так как 0 считается "ложным"
console.log(count ?? 10); // Выводит 0, так как count не равен null/undefined