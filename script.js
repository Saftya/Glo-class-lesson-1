'use strict'

let title 
let screens 
let screenPrice 
let adaptive
let rollback = 10
let allServicePrices
let fullPrice
let servicePercentPrice

let service1 
let service2

// let servicePrice1 = 3000
// let servicePrice2 = 5000
// let screenPrice = 12000

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num)
} 

let asking = function(){
    title = prompt("Как называется ваш проект?", "Калькулятор верстки")
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные")

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?")
        // screenPrice++;
    } while (!isNumber(screenPrice))  
      
    // while (!isNumber(screenPrice)){
    //     screenPrice = prompt("Сколько будет стоить данная работа?")
    // }
    adaptive = confirm("Нужен ли адаптив на сайте?")
}


const getAllServicePrices = function (){
    let sum = 0
    for (let i = 0; i < 2; i++){
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i ===1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }
        sum = +prompt("Сколько это будет стоить?")
        while (!isNumber(sum)){
    sum = prompt("Сколько это будет стоить?")
    }
    return sum
}
}


function getFullPrice(){
return screenPrice + allServicePrices;
}


// function getTitle(title) {
// console.log(title.replace(" КаЛьКулятор В", "Калькулятор в"));
// } 
// getTitle(' КаЛьКулятор Верстки');

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}

// let rollback = fullPrice * 0.1
const getServicePercentPrices = function() {
return fullPrice - (fullPrice * (rollback/100))
}


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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
showTypeOf(allServicePrices)
showTypeOf(fullPrice)
showTypeOf(servicePercentPrice)

console.log("allServicePrices", allServicePrices)
console.log(Math.ceil(servicePercentPrice));
console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());