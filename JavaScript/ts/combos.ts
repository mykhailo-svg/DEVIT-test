const combos = (num: number): string => {
  //Створимо масив для збереження комбо
  const result: number[][] = [];

  //Свторимо функцію що приймає у себе кілька параметрів

  const findCombinations = (
    currentCombo: number[], //Поточне комбо
    remainingSum: number, //Суму що ще треба отримати,це різниця між даним числом та сумою чисел поточного комбо
    startNum: number //Стартове число
  ) => {
    //Якщо нам ще залишилось 0 щоб сума всіх чисел дорівнювала даному числу - ми знайшл 1 комбінацію
    if (remainingSum === 0) {
      //У результат записуємо наш підмасив і завершуємо роботу функції
      result.push([...currentCombo]);
      return;
    }

    //Продовжкємо пошуки,пробігаючись від стартового числа до шуканого числа

    for (let i = startNum; i <= num; i++) {
      //Якщо поточне число[i] <= від залишкової суми записуємо його у поточне комбо

      if (i <= remainingSum) {
        currentCombo.push(i);
        //Шукаємо наступне число для комбо передаючи оновлену комбінацію
        findCombinations(currentCombo, remainingSum - i, i);
        //Видаляємо останній елемент пісял
        currentCombo.pop();
      }
    }
  };

  //Початковий виклик
  findCombinations([], num, 1);
  //Для зручності тестування переведемо у стрічку
  return JSON.stringify(result);
};

console.log(combos(3));
console.log(combos(10));
