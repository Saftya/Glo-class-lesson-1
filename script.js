prompt("Как называется ваш проект?");
let title = 'Lesson 3';
prompt("Какие типы экранов нужно разработать?");
let screens = 'Простые, Сложные, Интерактивные';
prompt("Сколько будет стоить данная работа?");
let screenPrice = 12000;
prompt("Нужен ди адаптив на сайте?");
let adaptive = true;


prompt("Какой дополнительный тип услуги нужен?");
let service1 = 'верстка одностраничника';
prompt("Сколько будет стоить?");
let servicePrice1 = 5000;
prompt("Какой дополнительный тип услуги нужен?");
let service2 = 'верстка многостраничника';
prompt("Сколько будет стоить?");
let servicePrice2 = 10000;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let rollback = 5000;
let servicePercentPrice = fullPrice - rollback;

console.log(Math.ceil(servicePercentPrice));


switch (true) { 
case fullPrice > 30000:
    console.log('Даем скидку в 10%'); 
        break
case fullPrice > 15000 && fullPrice <= 30000:
    console.log('Даем скидку в 5%');
        break
case fullPrice <= 15000 && fullPrice >= 0:
    console.log('Скидка не предусмотрена');
        break
case fullPrice < 0: 
console.log('Что то пошло не так');
}