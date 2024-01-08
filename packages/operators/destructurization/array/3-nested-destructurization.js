/**
 *? Деструктуризация вложенных массивов
 */

const courseGrades = [
    ["Математика", [5, 4, 3, 2]],
    ["Литература", [5, 5, 4, 3]],
    ["Физика", [4, 4, 3, 2]]
];

// синтаксис с деструктуризацией вложенного массива
for (const [course, [firstGrade]] of courseGrades) {
    console.log(`Курс ${course}, первая оценка ${firstGrade}`);
}

// Пример с базовой деструктуризацией
for (const [course, grades] of courseGrades) {

    const [firstGrade] = grades;
    console.log(`Курс ${course}, первая оценка ${firstGrade}`);
}