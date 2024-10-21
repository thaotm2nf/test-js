
class ServiceContainer{
    private bindings: Map<string, any> = new Map();

    bind(key: string, concrete: any){
        this.bindings.set(key, concrete);
    }

    resolve(key: string){
        let concrete = this.bindings.get(key);

        if(concrete){
            return concrete();
        }



        throw new Error("Not found");
    }

    get(key: string){
        return this.resolve(key);
    }

}

interface IPayment{
    pay(): void
}

class PayPalPayment{
    constructor(){
        console.log("Service A");
    }

    pay(){
        console.log("Payment made");
    }
}

class StripePayment implements IPayment{
    constructor(){
        console.log("Service B");
    }

    pay(){
        console.log("Stripe payment made");
    }
}

const serviceContainer = new ServiceContainer();
serviceContainer.bind('IPayment', function (){
    return new StripePayment();
    // return new PayPalPayment();
})

const payment = serviceContainer.get('IPayment');
console.log(payment, 'payment')
payment.pay();




/**
 * Tôi muốn hỏi:
 * Class A phụ thuộc class B, class B thụ thuộc class C.
 * Nếu tôi biding như sau. Khi run sẽ lỗi đúng không?
 * $this->app->bind(A::class, function ($app) {
 *     return new A($app->make(B::class));
 * });
 *
 * Khi bạn bind A::class như thế này, Laravel sẽ sử dụng closure mà bạn cung cấp để tạo ra instance của A.
 * Trong closure này, bạn yêu cầu Service Container tạo ra một instance của B bằng cách gọi $app->make(B::class).
 * Điều này có nghĩa là Laravel sẽ resolve (giải quyết) B trước, sau đó sử dụng instance của B để tạo ra instance của A.
 *
 * - Case 1: Nếu B không được bind trong container:
 * Nếu bạn không bind B trong container và bạn gọi $app->make(B::class), Laravel sẽ cố gắng tự động resolve B bằng cách sử dụng Reflection.
 * Nếu B phụ thuộc vào C, và C cũng không được bind, Laravel sẽ tiếp tục sử dụng Reflection để resolve C.
 * Laravel sẽ tự động resolve cả B và C bằng Reflection, sau đó sẽ không có lỗi xảy ra nếu tất cả các phụ thuộc của B đều có thể được resolve.
 *
 * - Case 2: Nếu B được bind nhưng không resolve được phụ thuộc C:
 * Nếu bạn đã bind B nhưng trong logic bind của B, bạn không thể resolve được C,
 * khi đó quá trình tạo B sẽ gặp lỗi, và do đó việc tạo A cũng sẽ bị lỗi.
 *
 * - Case 3: Nếu B được bind đúng cách:
 *
 * Nếu bạn đã bind B trong container và B có thể resolve được tất cả các phụ thuộc của nó (bao gồm cả C),
 * thì quá trình tạo A sẽ thành công mà không gặp lỗi.
 *
 *
 *
 *
 *
 */