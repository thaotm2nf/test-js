//Observer Pattern: Cho phép cậu tạo ra các hệ thống theo dõi các sự kiện,
// trong đó, "observers" đăng ký để lắng nghe và phản ứng với các sự kiện được phát ra bởi "subjects".
// Nó kết nối publisher và subscribers mà không cần chúng biết về nhau.
// Giống như một bảng thông báo tự động, bất cứ khi nào có thông tin mới, mọi người đều nhận được tin nhắn.

function Subject() {
    this.observers = [];
}


Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
    },
    unsubscribe: function(fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn !== fnToRemove) {
                return fn;
            }
        });
    },
    fire: function() {
        this.observers.forEach(fn => {
            fn.call();
        });
    }
};


const subject = new Subject();

console.log(subject, 's')

// log helper
function observer1() {
    console.log("Observer 1 Firing!");
}
function observer2() {
    console.log("Observer 2 Firing!");
}

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.fire();
subject.unsubscribe(observer1);
subject.fire();

console.log(subject, 'đ')