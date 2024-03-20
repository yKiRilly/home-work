//1

//2

let numbers = [3, 15, 8, 12, 7, 20, 5];

function printNumbersAbove10(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

printNumbersAbove10(numbers);

//3

function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Ошибка: деление на ноль!';
            }
        default:
            return 'Неподдерживаемая операция!';
    }
}


let resultAddition = calculator(2, 3, 'plus');
let resultSubtraction = calculator(2, 3, 'minus');
let resultMultiplication = calculator(2, 3, 'multiply');
let resultDivision = calculator(6, 2, 'divide');


console.log("Результат сложения:", resultAddition);
console.log("Результат вычитания:", resultSubtraction);
console.log("Результат умножения:", resultMultiplication);
console.log("Результат деления:", resultDivision);
