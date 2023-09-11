//Будемо використовувати рекурсію і перевіряти на те чи це об'єкт чи масив і виконувати відповідні дії
const deepEqual = (object1: any, object2: any): boolean => {
  if (object1 === object2) {
    //Будемо використовувати щоб рекурсивно порівнювати елементи об'єкту
    return true;
  }
  if (object1 == null || object2 == null) {
    //Якщо один із об'єктів є null або undefined, то вони не глибоко рівні.
    return false;
  }
  if (typeof object1 !== typeof object2) {
    //Перевіряємо на рівність типів аргументів
    return false;
  }
  if (typeof object1 !== "object") {
    // Якщо обидва об'єкти не є об'єктами, то вони не глибоко рівні.
    return false;
  }
  if (Array.isArray(object1) || Array.isArray(object2)) {
    if (!Array.isArray(object1) || !Array.isArray(object2)) {
      //Перевіримо,чи усі аргументи - масиви
      return false;
    }
    if (object1.length !== object2.length) {
      //Масиви,чиї дожини різні,не є рівними
      return false;
    }
    for (let i = 0; i < object1.length; i++) {
      //Якщо довжини однакові,порівняємо рекрсивно усі елементи масиву
      if (!deepEqual(object1[i], object2[i])) {
        return false;
      }
    }
    //Отже аргументи - не масиви,розглянемо випадки для об'єкта
  } else {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      //Аналогічно порівняємо на рівну довжину ключів об'єкта
      return false;
    }
    //Пройдемось по ключах об'єкта і перевіримо чи має другий об'єкт такі ключі , а далі - на рвіність примітивів
    for (const key in object1) {
      if (!object2.hasOwnProperty(key)) {
        //Перевіримо,чи є такий ключ у другому об'єкті
        return false;
      }
      // Рекурсивно порівнюємо значення по кожному ключу.
      if (!deepEqual(object1[key], object2[key])) {
        return false;
      }
    }
  }
  //Оскільки ніде помилок не помічено - повертаємо true
  return true;
};
console.log(deepEqual({ name: "test" }, { name: "test" })); //true
console.log(deepEqual({ name: "test" }, { name: "test1" })); //false
console.log(
  deepEqual(
    { name: "test", data: { value: 1 } },
    { name: "test", data: { value: 2 } }
  )
); //false
console.log(deepEqual({ name: "test" }, { name: "test", age: 10 })); //false
