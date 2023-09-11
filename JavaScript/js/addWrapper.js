//Для початку створюємо головну функцію і встановлюємо почткове значення x
const add = (x) => {
    //Створюємо функцію , яка буде додавати до поточного x настпний аргумент
    const adderNext = (y) => {
        //Зробимо це рекурсивно
        return add(x + y);
    };
    //Використажмо метод valueOF для повернення примітиву
    adderNext.valueOf = function () {
        return x;
    };
    //Повертаємо резльтат роботи функції що додає два числа
    return adderNext;
};
console.log(Number(add(1)(2))); // == 3
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); //  == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5
