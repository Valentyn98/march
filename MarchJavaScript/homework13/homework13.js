function wakeUp (sleep) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (sleep){
                resolve('good')
            }else{
                reject('Bad / Close')
            }
        },500)
    })
}
function brushTheTeeth(strange){
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (strange !== 'good'){
            reject('not enough strange')

        }else {
            resolve('You have a strange for brush your teeth')

        }
    },300)
})
}
function goToWork (statusForBrush){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (statusForBrush === 'You have a strange for brush your teeth'){
                resolve('You can go to work')
            }else{
                reject('You must sleep at home')
            }
        },100)
    })
}

function money (goWorkOrNo){
    return new  Promise((resolve, reject) => {
        setTimeout(()=>{
            if (goWorkOrNo === 'You can go to work'){
                resolve('you are so good')
            }else{
                reject('Денег надо ? Играй в Вавадо')
            }
        },333)
    })
}

function car (yesOrNoMoney){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (yesOrNoMoney === 'you are so good' ){
                resolve('Работай еще ,раб')
            }else {
                reject('Ищи работу , что бы работать')
            }
        },123)
    })
}
// wakeUp(true)
// .then((status )=> {
//     console.log('your status is ' + status)
//    return  brushTheTeeth(status)
// })
//     .then(statusForBrush => {
//         console.log(statusForBrush)
//         return goToWork(statusForBrush)
//     })
//     .then(goWorkOrNo =>{
//         console.log(goWorkOrNo)
//         return money(goWorkOrNo)
//     })
//     .then(yesOrNoMoney =>{
//         console.log(yesOrNoMoney)
//         return car(yesOrNoMoney)
//     })
//     .then(nuSho =>{
//         console.log(nuSho)
//     })
// .catch(reason => {
//     console.log('your status is ' + reason)
// })

async function  life(){
    const situation = await wakeUp(true)
    console.log(situation)
    const forBrush = await brushTheTeeth(situation)
    console.log(forBrush)
    const work = await goToWork(forBrush)
    console.log(work)
    const moneyForCar = await money(work)
    console.log(moneyForCar)
    const cars = await car(moneyForCar)
    console.log(cars)
}
life()