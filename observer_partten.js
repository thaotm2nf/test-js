//Observer Pattern: Theo dõi sự thay đổi của một đối tượng và phản ứng khi có sự kiện xảy ra sau đó gửi thông báo đến các observer đã đăng ký
// 2 thành phần: Subject và Observer
// subject là đối tượng được theo dõi, observer là đối tượng theo dõi subject
// khi subject thay đổi, observer sẽ phản ứng 
// . Khi trạng thái của subject thay đổi, nó sẽ thông báo cho tất cả các observer về sự thay đổi này.

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

console.log(subject, 'before subscribe')

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

console.log(subject, 'after unsubscribe')