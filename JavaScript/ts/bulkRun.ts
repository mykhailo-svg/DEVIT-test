const bulkRun = (array: any): Promise<any> => {
  //Створимо масив промісів
  //elem - елемент з масиву пари [функція , [аргументи]]
  //elem[0] - функція
  //Спредом розпаковуємо параметри elem[1]
  let promises = array.map((elem: any) => elem[0](...elem[1]));

  //Виконуються усі проміси
  return Promise.all(promises);
};

const f4 = (a: any, b: any) => a + b;
const f5 = (x: number, y: number, z: number) => x * y * z;

bulkRun([
  [f4, [2, 3]],
  [f5, [4, 5, 6]],
]).then(console.log);
