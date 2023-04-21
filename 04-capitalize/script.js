/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const text = str.split(' ');
    const filterText = text.filter(function (item) {
        return item != ''  
    });
    const array = []

    for (let i = 0; i < filterText.length; i++) {
        array.push(filterText[i][0].toUpperCase() + filterText[i].slice(1))
    }
    return array.join(' ')
};
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё  простит')); // "Молодость Всё Простит"

