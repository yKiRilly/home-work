//1

let numbers = [3, 8, 12, 5, 10, 7, 22, 16];

console.log("Четные числа из массива:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

//2

let rainbowColors = ['красный', 'оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый'];


console.log("Цвета радуги в обратном порядке:");
for (let i = rainbowColors.length - 1; i >= 0; i--) {
    
    console.log(rainbowColors[i]);
}