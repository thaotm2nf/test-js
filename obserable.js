// // Mô hình timeout Observer
function Obserable(_callback) {
    this._subscribe = _callback
}

function Subscription(objectSub) {
    this.unsubscribe = objectSub.unsubscribe
}

Obserable.prototype.subscribe = function (observerOrNext, error, complete) {
    let observer;
    if (typeof observerOrNext === 'function') {
        observer = {
            next: observerOrNext,
            error: error || (() => {
            }),
            complete: complete || (() => {
            })
        }
    } else {
        observer = observerOrNext
    }

    return this._subscribe(observer)
}

const from = function (arrays) {
    const observable = new Obserable(function (observer) {
        observer.next(arrays);
        observer.complete();

        return new Subscription({
            unsubscribe: () => {
                console.log('clear');
            }
        });
    });
  
    observable.push = function(item) {
        arrays.push(item); 
        observable._subscribe(observer);
    };

    return observable;
};


const observer = {
    next: (value) => {
        console.log(value, 'value 1')
    },
    complete: () => {
        console.log('complete')
    }
}

const observer2 = {
    next: (value) => {
        console.log(value, 'value 2')
    },
    complete: () => {
        console.log('complete 2')
    }
}

const observable = from([1, 2, 3]);
observable.subscribe(observer);

observable.push(4); 
observable.subscribe(observer2);

console.log("================")
observable.push(5); 


//subscription.unsubscribe()



// // rxjs
// const rxjs = function (){
//     function Obserable(_callback) {
//         this._subsribe = _callback
//     }

//     function Subscription(objectSub) {
//         this.unsubscribe = objectSub.unsubscribe
//     }

//     Obserable.prototype.subscribe = function (observerOrNext, error, complete) {
//         let observer;
//         if (typeof observerOrNext === 'function') {
//             observer = {
//                 next: observerOrNext,
//                 error: error || (() => {
//                 }),
//                 complete: complete || (() => {
//                 })
//             }
//         } else {
//             observer = observerOrNext
//         }

//         return this._subsribe(observer)
//     }

//     // only array
//     const from = function (arrays) {
//         return new Obserable(function (observer) {
//             const timeout = () => {
//                 for(let i = 0; i <= arrays.length; i++){
//                     observer.next(arrays[i])
//                     observer.complete()
//                 }
//             }

//             timeout()

//             return new Subscription({
//                 unsubscribe: () => {
//                     console.log('clear')
//                 }
//             })
//         })
//     }

//     const interval = function (mm){
//         return new Obserable(function (observer) {
//             const timeout = setInterval(() => {
//                 observer.next()
//                 observer.complete()
//             }, mm)

//             return new Subscription({
//                 unsubscribe: () => {
//                     clearInterval(timeout)
//                 }
//             })
//         })
//     }

//     const timeout = function (mm){
//         return new Obserable(function (observer) {
//             const timeout = setTimeout(() => {
//                 observer.next()
//                 observer.complete()
//             }, mm)

//             return new Subscription({
//                 unsubscribe: () => {
//                     clearTimeout(timeout)
//                 }
//             })
//         })
//     }


//     return {
//         from,
//         interval,
//         timeout
//     }
// }()

//
// rxjs.from([1,2,3]).subscribe(observer)
//

//  rxjs.interval(1000).subscribe(observer)


// // Cơ chế event listen
// class Observer {
//     listens = []

//     subcribe(callback){
//         this.listens.push(callback)
//     }

//     newVideo(){
//         for(let i = 0; i< this.listens.length; i++){
//             this.listens[i]()
//         }
//     }
// }

// const ob = new Observer()

// ob.subcribe(() => {
//     console.log('call')
// })

// ob.newVideo()