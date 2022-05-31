// 1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let divPost = document.createElement('div')
// document.body.append(divPost)
// divPost.classList.add('father')
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//
//         for (const valueElement of value) {
//             let div = document.createElement('div')
//             divPost.append(div)
//             div.classList.add('styleDiv')
//             let userId = document.createElement('div')
//             userId.innerText = `userId :` + valueElement.userId
//             let id = document.createElement('div')
//             id.innerText = `id :` + valueElement.id
//             let title = document.createElement('div')
//             title.innerText = `title :` + valueElement.title
//             let body = document.createElement('div')
//             body.innerText = `body :` + valueElement.body
//             div.append(userId,id,title,body)
//         }
//     })

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
        for (const valueElement of value) {
            let comm = document.createElement('div')
            divComments.append(comm)
            comm.classList.add('comm')

            let postId = document.createElement('div')
            postId.innerText = `postId :` + valueElement.postId
            let id = document.createElement('div')
            id.innerText = `id :` + valueElement.id
            let name = document.createElement('div')
            name.innerText = `name :` + valueElement.name
            let email = document.createElement('div')
            email.innerText = `email :` + valueElement.email
            let body = document.createElement('div')
            body.innerText = `body :` + valueElement.body
            comm.append(postId,id,name,email,body)

        }
    })