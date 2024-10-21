// // Mô hình timeout Observer
function Obserable(_callback) {
    this._subsribe = _callback
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

    return this._subsribe(observer)
}

// create object obserable obj time
const objTime$ = new Obserable(function (mm) {
    const timeout = setTimeout(() => {
        observer.next(2)
        observer.next(2)
        observer.complete()
    }, mm)

    return new Subscription({
        unsubscribe: () => {
            clearTimeout(timeout)
        }
    })
})

const observer = {
    next: () => {
        console.log('next')
    },
    complete: () => {
        console.log('complete')
    }
}
// khi subcribe thì trigger hàm callback
const subscription = objTime$.subscribe(observer)

subscription.unsubscribe()







// rxjs
const rxjs = function (){
    function Obserable(_callback) {
        this._subsribe = _callback
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

        return this._subsribe(observer)
    }

    // only array
    const from = function (arrays) {
        return new Obserable(function (observer) {
            const timeout = () => {
                for(let i = 0; i <= arrays.length; i++){
                    observer.next(arrays[i])
                    observer.complete()
                }
            }

            timeout()

            return new Subscription({
                unsubscribe: () => {
                    console.log('clear')
                }
            })
        })
    }

    const interval = function (mm){
        return new Obserable(function (observer) {
            const timeout = setInterval(() => {
                observer.next()
                observer.complete()
            }, mm)

            return new Subscription({
                unsubscribe: () => {
                    clearInterval(timeout)
                }
            })
        })
    }

    const timeout = function (mm){
        return new Obserable(function (observer) {
            const timeout = setTimeout(() => {
                observer.next()
                observer.complete()
            }, mm)

            return new Subscription({
                unsubscribe: () => {
                    clearTimeout(timeout)
                }
            })
        })
    }


    return {
        from,
        interval,
        timeout
    }
}()

//
// rxjs.from([1,2,3]).subscribe(observer)
//

 rxjs.interval(1000).subscribe(observer)


// Cơ chế event listen
class Observer {
    listens = []

    subcribe(callback){
        this.listens.push(callback)
    }

    newVideo(){
        for(let i = 0; i< this.listens.length; i++){
            this.listens[i]()
        }
    }
}

const ob = new Observer()

ob.subcribe(() => {
    console.log('call')
})

ob.newVideo()