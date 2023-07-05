'use strict'

let servicePrice1 = 3000
let servicePrice2 = 5000
let screenPrice = 12000
let screens = prompt("Какие типы экранов нужно разработать?")


const getAllServicePrices = function (){
    return servicePrice1 + servicePrice2
}
let allServicePrices = getAllServicePrices()


function getFullPrice(){
return screenPrice + allServicePrices;
}
let fullPrice = getFullPrice()


function getTitle(title) {
console.log(title.replace(" КаЛьКулятор В", "Калькулятор в"));
} 
getTitle(' КаЛьКулятор Верстки');


let rollback = fullPrice * 0.1
const getServicePercentPrices = function() {
return fullPrice - rollback;
}
const servicePercentPrice = getServicePercentPrices()

const showTypeOf = function(variable) {
console.log(variable, typeof variable);
}


const getRollbackMessage = function(price) {
if (price >= 30000){
    return 'Даем скидку в 10%'
}
else if (price < 30000 && price >= 15000) {
    return'Даем скидку в 5%'
}
else if (price >= 0 && price < 15000){
    return 'Скидка не предусмотрена'
}
else {
    return'Что-то пошло не так'
}
}


showTypeOf(allServicePrices)
showTypeOf(fullPrice)
showTypeOf(servicePercentPrice)


console.log(Math.ceil(servicePercentPrice));
console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());