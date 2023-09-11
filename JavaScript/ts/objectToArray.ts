//Коротко:функція перетворює об'єкти в масиви за зразком [key,value]
const objectToArray = (obj: any): any[] => {
  //Створимо пустий масив для збереження результату роботи функції при рекурсії
  const result = [];

  //Пробігаємося по масиву
  for (const key in obj) {
    //Для зручності і читабельності запишемо теперішній елемент у змінну
    const value = obj[key];

    //Дізнаємося чи потрібно перетворювати рекурсивно об'єкт у масив
    if (typeof value === "object" && !Array.isArray(value)) {
      //Записуємо результат щоб повернути його
      result.push([key, objectToArray(value)]);
    } else {
      //Коли дібрались примітивів чи масивів просто записуємо їх у результат
      result.push([key, value]);
    }
  }

  //Повертаємо результат роботи
  return result;
};

const inputObject = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

console.log(JSON.stringify(objectToArray(inputObject)));
