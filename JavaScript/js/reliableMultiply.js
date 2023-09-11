//Свторимо класи , що наслідують клас помилок
class NotificationException extends Error {
}
class ErrorException extends Error {
}
//Функція для формування помилок чи множення чисел
//на основі випадкових чеисел
const primitiveMultiply = (a, b) => {
    //Свторимо випадкове число на основі якого усе буде відбуватись
    const rand = Math.random();
    //Якщо випадкове число < 0.5 то просто повертаємо результат без помилок
    if (rand < 0.5) {
        //Повертаємо результат
        return a * b;
    }
    //Якщо випадкове число > 0.85 то повертаємо попередження
    else if (rand > 0.85) {
        throw new ErrorException();
    }
    //Інакше повертаємо фатальну помилку
    else {
        throw new NotificationException();
    }
};
const reliableMultiply = (a, b) => {
    //Виконуємо функцію множення поки не викине помилку
    while (true) {
        //Завернемо в блок try catch для відловлення помилок
        try {
            //Спробуємо виконати множення
            return primitiveMultiply(a, b);
        }
        catch (error) {
            //Якщо помилка налажеть класу NotificationException
            if (error instanceof NotificationException) {
                //Виводимо попердження у консоль та продовжуємо роботу
                console.log("NotificationException occured , retrying ");
            }
            //Якщо помилка належить класу ErrorException завершуємо роботу
            else if (error instanceof ErrorException) {
                throw error;
            }
            else {
                throw error; //Якщо виникла помлка іншого типу кидаюмо помилку
            }
        }
    }
};
console.log(reliableMultiply(8, 8));
