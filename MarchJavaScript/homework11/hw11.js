// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let name = document.getElementById('name')
let age = document.getElementById('age')
let button = document.getElementById('accept')

let key = 'nameAndAge'
console.log(key);
let func = (name,age) =>{
     let obj = {
         name:name.value,
         age:age.value
     }
    console.log(obj);
    localStorage.setItem(key,(JSON.stringify(obj)))
}
button.onclick = (prev) =>{
    func(name,age)

    prev.preventDefault()
}
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let model = document.getElementById('model')
let type = document.getElementById('type')
let volume = document.getElementById('volume')
let butCar = document.getElementById('car')

let keyCar = "Car"

let setCar = (model,type,volume) =>{
    let arrCar = {
        model: model.value,
        type: type.value,
        volume: volume.value,
        id: Date.now()
    }

    let i =  []

    // JSON.parse(localStorage.getItem("keyCar")) ||
    i.push(arrCar)
    localStorage.setItem(keyCar,JSON.stringify(i))
}

butCar.onclick = (e) =>{
    setCar(model,type,volume)
    e.preventDefault()
}


