// Задание #1
let sum = 0;
const number = 100;

for (let i = 0; i <= number; i += 3) {
    if (i % 2 !== 0) {
            continue;
        }
    if (i * 2 !== 0 && i < 40 || i > 59) 
        console.log('Я цифра: ', i);    
    sum += i;
} 
console.log(`Общая сумма равна ${sum}`);

// Задание #2
let input = prompt("Укажите Ваш возраст")
if (input === null) {
  alert("Отменено пользователем");
} else if (input >= 0 && input <= 2) {
  alert("Вы младенец");
} else if (input >= 3 && input <= 18) {
  alert("Вы ребёнок");
} else if (input >= 18 && input <= 150) {
  alert("Вы взрослый");
} else if (input > 150) {
 alert("Вы указали ошибочный возраст")
} else {
alert("Вы ввели не число")
}

// Задание #3
let input;
let total = 0;

do {
    input=prompt("Введите число");
    sum+=Number(input);
    let inputIsNaN = isNaN(Number(input))
    inputIsNaN = alert("Вы ввели не число")
}while(input !== null)

console.log(sum)