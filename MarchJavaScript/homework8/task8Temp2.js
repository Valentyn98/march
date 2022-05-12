<!--Взяти файл template_2.html та працювати в ньому-->
<!--1) Напишіть код, який :-->
<!--a) додає клас з назвою групи, елементу з ід main_header-->
let m = document.getElementById('main_header')
m.classList = 'march'
console.log(m);
// <!--b) робить шириниу елементу ul 400px-->
m.style.width = '400px'
// <!--c) робить шириниу всіх елементів з класом linkList шириною 50%-->
linkL = document.getElementsByClassName('linkList')
for (const linkLElement of linkL) {
    linkLElement.style.width = '50%'
}
// <!--d) отримує текст який зберігається в елементі з класом listElement2-->
let text = document.getElementsByClassName('listElement2')
console.log(text);
// <!--e) отримує всі елементи li та змінює ім колір фону на сірий-->
let li = document.getElementsByTagName('li')
for (const liElement of li) {
    liElement.style.backgroundColor = 'grey'
}

// <!--f) отримує всі елементи 'a' та додає їм клас anchor-->
let allA = document.getElementsByTagName('a')
for (const allAElement of allA) {
    allAElement.classList = 'anchor'
}
console.log(allA);
// <!--g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів-->

// <!--h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a-->
// <!--i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()-->
// <!--j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()-->
// <!--k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()-->
// <!--l) отримати елементи p та змінити їм padding на 20px-->
// <!--m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)-->