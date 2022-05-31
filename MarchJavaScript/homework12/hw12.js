// 1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let divPost = document.createElement('div')
document.body.append(divPost)
divPost.classList.add('father')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {

        for (const valueElement1 of value) {
            let div = document.createElement('div')
            divPost.append(div)
            div.classList.add('styleDiv')
            let userId = document.createElement('div')
            userId.innerText = `userId :` + valueElement1.userId
            let id = document.createElement('div')
            id.innerText = `id :` + valueElement1.id
            let title = document.createElement('div')
            title.innerText = `title :` + valueElement1.title
            let body = document.createElement('div')
            body.innerText = `body :` + valueElement1.body
            div.append(userId,id,title,body)
        }
    })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let divComments = document.createElement('div')
document.body.append(divComments)
divComments.classList.add('fatherComm')

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        for (const valueElement2 of value) {
            let comm = document.createElement('div')
            divComments.append(comm)
            comm.classList.add('comm')

            let postId = document.createElement('div')
            postId.innerText = `postId :` + valueElement2.postId
            let id = document.createElement('div')
            id.innerText = `id :` + valueElement2.id
            let name = document.createElement('div')
            name.innerText = `name :` + valueElement2.name
            let email = document.createElement('div')
            email.innerText = `email :` + valueElement2.email
            let body = document.createElement('div')
            body.innerText = `body :` + valueElement2.body
            comm.append(postId,id,name,email,body)

        }
    })