//Рекурсивна функція приймає у аргументи будь-який об'єкт
//та префікс який зберігатиме вкладення
const slashObjectToArray = (obj, pref = "") => {
    //Створимо пустий об'єкт для збереження результату роботи
    let result = {};
    //Пробігаємося по об'єкту
    for (const key in obj) {
        //Запевнимось що нам потрібно перетворювати об'єкт на карту
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            const previousElem = slashObjectToArray(obj[key], `${pref}${key}/`);
            //Записуємо об'єкту результат
            Object.assign(result, previousElem);
        }
        else {
            //Якщо зустрічаємось з примітивом або масивом - записуємо кінцеве значення
            result[pref + key] = obj[key];
        }
    }
    //Повертаємо результат роботи
    return result;
};
console.log(JSON.stringify(slashObjectToArray({
    a: 1,
    s: {
        b: "dd",
        c: "2314",
    },
})));
