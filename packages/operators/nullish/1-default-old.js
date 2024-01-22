/**
 * ? Nullish Coalescing Operator без нового синтаксиса
 */

const left = 0;
const right = 10;

const a = left !== null && left !== undefined ? left : right;
