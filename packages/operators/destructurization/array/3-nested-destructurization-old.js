/**
 *? Деструктуризация вложенных массивов
 */

const courseGrades = [
    ["Математика", [5, 4, 3, 2]],
    ["Литература", [5, 5, 4, 3]],
    ["Физика", [4, 4, 3, 2]]
];

for (var i = 0; i < courseGrades.length; i++) {
    var course = courseGrades[i][0];
    var firstGrade = courseGrades[i][1][0];
    console.log("Курс: " + course + ", Первая оценка: " + firstGrade);
}