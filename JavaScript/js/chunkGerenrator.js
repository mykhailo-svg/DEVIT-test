//Запишемо function* для можливості
function* chunkArray(arr, chunkSize) {
    //Почнімо з першого чанку з тобто з початку масиву
    let index = 0;
    while (index < arr.length) {
        //Вирізаємо частину масиву і повертаємо його частину
        yield arr.slice(index, index + chunkSize);
        //Збільшуємо індекс ітератора для переходу на наступний чанк
        index += chunkSize;
    }
}
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
