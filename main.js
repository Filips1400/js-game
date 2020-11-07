function random(number) {
    return Math.ceil(Math.random() * number);
 }

let name = prompt('Привіт, як тебе звати?');

while (name == '' || name == null) {
  name = prompt('Приівт, як тебе звати?');
} 

alert('Окей ' + name  + ' я загадав тобі число від 1 до 100, відгадай його, удачі')

let number = random(100);
let guess = prompt('Яке число я загадав?');
while (guess != number) {
    if (guess > number) {
      guess = prompt('Забагато, спробуй ще раз!');
    }

    if (guess < number) {
      guess = prompt('Замало, спробуй ще раз!');
    }
}

alert('Вітаю тебе ' + name  + ' ти відгадав число ' + number);
