const bulkRun = (array) => {
    //Створимо масив промісів
    //elem - елемент з масиву пари [функція , [аргументи]]
    //elem[0] - функція
    //Спредом розпаковуємо параметри elem[1]
    let promises = array.map((elem) => elem[0](...elem[1]));
    //Виконуються усі проміси
    return Promise.all(promises);
};
const f4 = (a, b) => a + b;
const f5 = (x, y, z) => x * y * z;
bulkRun([
    [f4, [2, 3]],
    [f5, [4, 5, 6]],
]).then(console.log);
