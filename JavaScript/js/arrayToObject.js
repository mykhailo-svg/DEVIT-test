const arrayToObject = (arr) => {
    //Створимо пустий об'єкт для запису результату роботи
    const obj = {};
    //Пробігаємося по масиву
    for (const item of arr) {
        //Із змінної теперішнього елемента масиву дістаємо індекс і значення
        const [key, value] = item;
        //Перевіримо чи потрібно перетворювати аргумент у об'єкт
        if (Array.isArray(value)) {
            //Запишемо результат рекурсивного перетворення
            obj[key] = arrayToObject(value);
        }
        else {
            //Оскільки аргумент не є масивом - просто записуємо його у результат
            obj[key] = value;
        }
    }
    //Повертаємо результат роботи
    return obj;
};
var arr = [
    ["name", "developer"],
    ["age", 5],
    [
        "skills",
        [
            ["html", 4],
            ["css", 5],
            ["js", 5],
        ],
    ],
];
console.log(JSON.stringify(arrayToObject(arr)));
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
