// Деструктуризация массива

const arr = [0.1, 0.3, 0.5];

// До нового синтаксиса
{
  const x = arr[0];
  const y = arr[1];
  const z = arr[2];

  console.log(x, y, z); // 0.1 0.3 0.5
}

// После
{
  const [x, y, z] = arr;
  console.log(x, y, z); // 0.1 0.3 0.5
}

// Определение массива координат треугольника
const triangleCoordinates = [
  [0.0, 1.0], // Вершина вверху
  [-1.0, -1.0], // Левая нижняя вершина
  [1.0, -1.0], // Правая нижняя вершина
];

// Итерация по массиву координат и вывод в консоль
triangleCoordinates.forEach((vertex) => {
  console.log(`Координаты вершины: X=${vertex[0]}, Y=${vertex[1]}`);
});
