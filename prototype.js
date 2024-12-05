/**
 * Prototype là một object đặc biệt, chứa tất cả các thuộc tính, phương thức được chia sẻ giữa tất cả các instance của class đó
 * Giải quyết vấn đề kế thừa
 * Nói cách khác: Cho phép các instance của cùng một class có thể dùng chung các thuộc tính, method mà không cần phải sao phép lại cho từng instance
 * Khi define một class,(Class là một constructor function) class. Constructor function sẽ sinh ra object đặc biệt là Prototype.
 *  Prototype có thuộc tính constructor, trỏ đến chính class(constructor function)
 * Tất cả các instance được tạo ra từ class, sẽ thừa hưởng thuộc tính và phương thức từ prototype này
 * 
 */


// example
function say(){

}

say.prototype.age = 23
const s = new say()

console.log(say.prototype, 'say')
console.log(s.age, 's8')
s.age = 24
console.log(s.age, 's8')

console.log(say.prototype.age, 'say.prototype.age')
// Mọi function đều có một prototype(Bản chất function và class là một). prototype có kiểu là Object (Object prototype)
say.prototype.name = 'Thaotm'

// Object prototype này tham chiếu đến đối tượng Object.prototype(đây là gốc) thông qua liên kết [[Prototype]] hay thuộc tính __proto__.
say.prototype === Object.prototype // Có vẻ sai sai
console.log(Object.__proto__, 'Object.prototype1')
s.__proto__ === say.prototype // => s.__proto__.name = say.prototype.name hay s.name = say.prototype.name
s.__proto__.__proto__ === Object.prototype


// Liên hệ giữa constuctor và prototype
/**
 * Khi bạn tạo một class trong JavaScript, bản chất của nó là một constructor function với một prototype được gắn sẵn.
 *  Tất cả các instance sẽ được thừa hưởng thuộc tính và phương thức từ prototype của hàm constructor function
 * 
 */

class MyClass1 {
    greet() {
      console.log("Hello from MyClass!");
    }
  }
  
  // Bản chất constructor của MyClass
  console.log(MyClass1.constructor); // [Function: Function]
  
  // Kiểm tra prototype của MyClass và prototype của constructor
  console.log(MyClass1.prototype === MyClass1.constructor.prototype); // true

  /**
   * Điều này có nghĩa là:
        MyClass là một constructor function.
        MyClass.prototype là đối tượng prototype của constructor function này, nơi chứa các phương thức như greet().
        constructor.prototype thực chất là chính MyClass.prototype.
        constructor function là một hàm đặc biệt được sử dụng để khởi tạo các đối tượng (instance) từ một class hoặc một hàm. 
        Khi một đối tượng mới được tạo ra từ class hoặc hàm khởi tạo, constructor sẽ được gọi để thiết lập các thuộc tính và thực hiện các thao tác khởi tạo ban đầu cho đối tượng đó.
   */

        class MyClass {
            constructor(name) {
              this.name = name;
            }
          
            greet() {
              console.log(`Hello, my name is ${this.name}`);
            }
          }
          
          const obj1 = new MyClass("Alice");
          const obj2 = new MyClass("Bob");
          
          console.log(obj1.greet === obj2.greet); // true
          console.log(MyClass.prototype.greet === obj1.greet); // true
          console.log(obj1.constructor === MyClass); // true
          console.log(obj1.__proto__ === MyClass.prototype); // true
        