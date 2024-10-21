// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(444)
        resolve(333)
    }, 2000)
})

const t = promise.then((data) => {
    console.log(data, 'data')
})
console.log(promise, 'promise')
//
// promise.then((data)=> {
//     console.log(data, 'da')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(666)
//         }, 1000)
//
//     })
// }).then((data) => {
//     console.log(data)
// })
//
// console.log(111)
// class PromiseFake{
//     data = ''
//     error = ''
//     constructor(callback) {
//         callback(this.resolve, this.reject)
//     }
//
//     resolve(data){
//         this.data = data
//     }
//
//     reject(error) {
//         this.error = error
//     }
//     then(){
//         return this.data
//     }
//     catch(){
//         return this.error
//     }
// }
//
//
// //
// // const promiseFake = new PromiseFake((resolve) => {
// //     resolve(222123)
// // }
//
//
// function Test(){
//     this.b = '333'
// }
//
// const test = new Test()
//
// test.ahihi = 7676
//
// console.log(test, 'test')
//
// console.log(test.ahihi, 'ahihi')
//
//
// function Collection(){
// }
//
// Collection.prototype = Array.prototype
//
// // const collection = new Collection()
//
// Collection.prototype.map2 = function (){
//     console.log(555)
// }
//
// Collection.map2()
//
//
// export class Test {
//
// }