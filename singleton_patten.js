//Singleton Pattern: Singleton đảm bảo rằng class chỉ có một instance duy nhất
// và mọi truy xuất đều thông qua một điểm truy nhập được kiểm soát.
// Nó như là 'quản lý tòa nhà' - cho dù bạn có thử vài lần đi nữa, bạn luôn nói chuyện với cùng một người đó.

    var Singleton = (function() {
    var instance;
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

//
function caculatorFibo(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return caculatorFibo(n-1) + caculatorFibo(n-2);
}

//Tính tổng n số đầu tiên của dãy số fibonacci
function calculatorTotalFibo(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) {
        total += caculatorFibo(i);
    }
    return total;
}


var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true, both variables contain the same instance.