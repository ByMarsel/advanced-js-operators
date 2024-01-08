/**
 * ? Деструктуризация массива с пропуском элементов
 */

const gpsData = [55.7558, 37.6176, 150, "2023-12-20T12:00:00Z"];

const [latitute, longitute, , timestamp] = gpsData;

console.log(latitute, longitute, timestamp); // 55.7558 37.6176 2023-12-20T12:00:00Z
