// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let cont = document.getElementById('content')
console.log(cont);
// -- отримує текст з блоку з id "rules"
let rul = document.getElementById('rules')
console.log(rul);
// -- замініть текст параграфа з id 'content' на будь-який інший
let nexCont = document.getElementById('content')
nexCont.innerText = 'New Content'
console.log(nexCont);
// -- замініть текст параграфа з id 'rules' на будь-який інший
let nexRul = document.getElementById('rules')
nexRul.innerText = 'Random Rules'
console.log(nexRul);
// -- змініть кожному елементу колір фону на червоний
let chageColor = document.getElementsByTagName('body')
chageColor[0].style.backgroundColor = 'red'
// -- змініть кожному елементу колір тексту на синій
chageColor[0].style.color = 'blue'
// -- отримати весь список класів елемента з
// id=rules і вивести їх в console.log
let typeOfEl = document.getElementById('rules')
console.log(typeOfEl.classList);
console.log(typeOfEl);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let rulColor = document.getElementsByClassName('fc_rules')
for (const rulColorElement of rulColor) {
    rulColorElement.style.color = 'green'
}