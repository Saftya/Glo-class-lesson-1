const listAll = document.querySelectorAll('.books')
const listBooks = document.querySelectorAll('.book')

listBooks[0].before(listBooks[1])
listBooks[3].before(listBooks[4])
listBooks[5].after(listBooks[2])

const back = document.querySelector("body");
back.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
back.style.backgroundRepeat = "no-repeat"; 
back.style.backgroundPosition = "center";  

const array = Array.from(document.querySelectorAll('.book'));
const bookThree = array[2];

const bookName = bookThree.querySelector('h2')
bookName.textContent = "Книга 3. this и Прототипы Объектов";
bookName.style.color = 'darkkhaki';

const advertisement = document.querySelector('.adv')
advertisement.remove();

const array1 = Array.from(document.querySelectorAll('.book'));
const bookTwo = array1[1];

const content = bookTwo.querySelectorAll('li')
content[9].after(content[2])
content[3].after(content[8])
content[3].after(content[6])

const array2 = Array.from(document.querySelectorAll('.book'));
const bookFive = array2[4];

const contentOne = bookFive.querySelectorAll('li')
contentOne[1].after(contentOne[9])
contentOne[9].after(contentOne[3])
contentOne[3].after(contentOne[4])
contentOne[7].after(contentOne[5])

const array3 = Array.from(document.querySelectorAll('.book'));
const bookSix = array3[5];

const contentTwo = bookSix.querySelectorAll('li')
const newElem = document.createElement('li')
newElem.textContent = 'Глава 8: За пределами ES6'
contentTwo[8].append(newElem)


console.log(listAll);
console.log(listBooks);
console.log(back);
console.log(array);
console.log(bookThree);
console.log(bookTwo);
console.log(bookFive);
console.log(bookSix);
