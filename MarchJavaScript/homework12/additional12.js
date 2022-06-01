// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


// let divUsers = document.createElement('div')
// document.body.append(divUsers)
// divUsers.classList.add('fatherComm')

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
//         for (const valueElement of value) {
//             let us = document.createElement('div')
//             divUsers.append(us)
//
//             for (const valueElementKey in valueElement) {
//                 let firstDiv = document.createElement('div')
//                 if (typeof valueElement[valueElementKey] !== "object"){
//                     firstDiv.innerText = valueElementKey  +  valueElement[valueElementKey]
//                 }else {
//                     firstDiv.innerText = valueElementKey
//                     for (const valueTwo in valueElement[valueElementKey]) {
//                         let secondDiv = document.createElement('div')
//                         firstDiv.append(secondDiv)
//                             if (typeof valueElement[valueElementKey][valueTwo] !== 'object'){
//                                 secondDiv.innerText =  valueTwo + valueElement[valueElementKey][valueTwo]
//                             }else{
//                                 secondDiv.innerText = valueTwo
//                                 for (const valueThree in valueElement[valueElementKey][valueTwo]) {
//                                     let thirdDiv = document.createElement('div')
//                                     secondDiv.append(thirdDiv)
//                                     thirdDiv.innerText = valueElement[valueElementKey][valueTwo][valueThree]
//                                 }
//                             }
//                     }
//                 }
//                 us.append(firstDiv)
//             }
//             let but = document.createElement('button')
//             but.innerText = 'ShowPosts'
//
//             but.onclick = () =>{
//                 let divPost = document.createElement('div')
//                 document.body.append(divPost)
//                 divPost.classList.add('father')
//                 fetch('https://jsonplaceholder.typicode.com/posts')
//                     .then(value => value.json())
//                     .then(value => {
//                         for (const valueElement1 of value) {
//                             if (valueElement.id === valueElement1.userId) {
//                             let div = document.createElement('div')
//                             divPost.append(div)
//                                 let but = document.createElement('button')
//                                 but.innerText = 'ShowComm'
//                                 div.append(but)
//                             div.classList.add('styleDiv')
//                             let userId = document.createElement('div')
//                             userId.innerText = `userId :` + valueElement1.userId
//                             let id = document.createElement('div')
//                             id.innerText = `id :` + valueElement1.id
//                             let title = document.createElement('div')
//                             title.innerText = `title :` + valueElement1.title
//                             let body = document.createElement('div')
//                             body.innerText = `body :` + valueElement1.body
//                             div.append(userId, id, title, body)
//
//                                 but.onclick = () =>{
//                                     let divComments = document.createElement('div')
//                                     divPost.append(divComments)
//                                     divComments.classList.add('fatherComm')
//                                     fetch('https://jsonplaceholder.typicode.com/comments')
//                                         .then(value => value.json())
//                                         .then(value => {
//                                             for (const valueElement2 of value) {
//                                                 if (valueElement.userId === valueElement2.userId) {
//                                                     let comm = document.createElement('div')
//                                                     divComments.append(comm)
//                                                     comm.classList.add('comm')
//                                                     let postId = document.createElement('div')
//                                                     postId.innerText = `postId :` + valueElement2.postId
//                                                     let id = document.createElement('div')
//                                                     id.innerText = `id :` + valueElement2.id
//                                                     let name = document.createElement('div')
//                                                     name.innerText = `name :` + valueElement2.name
//                                                     let email = document.createElement('div')
//                                                     email.innerText = `email :` + valueElement2.email
//                                                     let body = document.createElement('div')
//                                                     body.innerText = `body :` + valueElement2.body
//                                                     comm.append(postId, id, name, email, body)
//                                                 }
//                                             }
//                                         })
//                                 }
//                         }
//                         }
//                     })
//             }
//
//             us.append(but)
//
//         }
//
//     })








// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


// let userDivB = document.createElement('div')
// document.body.append(userDivB)
// userDivB.classList.add('userDivB')
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         for (const postElement of posts) {
//             let divPosts = document.createElement('div')
//             userDivB.append(divPosts)
//
//             let divPostsEl = document.createElement('div')
//             divPosts.append(divPostsEl)
//             divPostsEl.innerText =  `UserId :` + `${postElement.userId}` +
//                                     `ID :` + `${postElement.id}` +
//                                     `Title :` + `${postElement.title}` +
//                                     `Body :` + `${postElement.body}`
//
//             let showComments = document.createElement('button')
//             divPostsEl.append(showComments)
//             showComments.innerText = 'Comments'
//             showComments.onclick = () =>{
//                 let divComments = document.createElement('div')
//                 divPostsEl.append(divComments)
//                 fetch('https://jsonplaceholder.typicode.com/comments')
//                     .then(value => value.json())
//                     .then(comments => {
//                         for (const comment of comments) {
//                             if (postElement.userId === comment.postId){
//                                 let comme = document.createElement('div')
//                                 divComments.append(comme)
//                                 comme.innerText = `postId :` + `${comment.postId}` +
//                                                     `Id :` + `${comment.id}` +
//                                                     `Name :` + `${comment.name}` +
//                                                     `Email :` + `${comment.email}`
//                             }
//                         }
//                     })
//             }
//
//         }
//     })



//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми,
// action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>,
// та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку,
//     при кліку на яку з лс видаляється конкретний обраний  товар



const {nameOfProd,countOfProd,priceOfProd,imageOfProd} = document.forms.form
let buttTo = document.getElementById('buttTo')
let key = 'Products'

const save = (nameOfProd,countOfProd,priceOfProd,imageOfProd) =>{
    let time = new Date().getTime()
    let i = JSON.parse(localStorage.getItem(key)) || []
    i.push({id:time,nameOfProd,countOfProd,priceOfProd,imageOfProd})
    localStorage.setItem(key, JSON.stringify(i))

}
buttTo.onclick = (e) => {
    e.preventDefault()
    save(nameOfProd.value, countOfProd.value, priceOfProd.value,imageOfProd.value )
}


