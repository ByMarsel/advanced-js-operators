function describePoint([x, y, z = 0]) {
    return `Точка с координатами X: ${x}, Y: ${y}, Z: ${z}`;
}

// Примеры вызова функции
console.log(describePoint([10, 20])); // Точка с координатами X: 10, Y: 20, Z: 0
console.log(describePoint([5, 12, 7])); // Точка с координатами X: 5, Y: 12, Z: 7
