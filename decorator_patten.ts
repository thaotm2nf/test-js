// pattern Decorator có thể được sử dụng để thêm chức năng vào một đối tượng hiện có mà không làm thay đổi lớp của đối tượng đó.
// Decorator Pattern giúp mở rộng chức năng của một đối tượng mà không cần phải thay đổi cấu trúc của nó.
// Decorator Pattern giúp tăng cường chức năng của một đối tượng mà không cần phải thay đổi cấu trúc của nó.

// logic ban đầu có chưc năng gửi email
// Muốn thêm chức năng ghi log khi gửi email
// Các cách làm
// 1. Thêm phương thức ghi log vào lớp EmailNotifier
// => không tốt vì lớp EmailNotifier sẽ phải thay đổi, hoặc ảnh hưởng tới những lớp khác sử dụng EmailNotifier ( đôi khi ho không cân ghi log)
// 2. Tạo ra class mới kế thừa từ EmailNotifier và thêm phương thức ghi log
// => không tốt vì sẽ phải tạo ra nhiều lớp mới khi muốn thêm chức năng ghi log, ví dụ có 10 chỗ cần thêm chức năng ghi log thì sẽ phải tạo ra 10 lớp mới
// 3. Sử dụng Decorator Pattern
// => tốt nhất vì không cần thay đổi lớp ban đầu, không cần tạo ra nhiều lớp mới, chỉ cần tạo ra các lớp decorator mới
// Chỉ cần gọi phương thức của lớp decorator mới, lớp decorator mới sẽ gọi phương thức của lớp ban đầu và thêm chức năng mới vào

// Ví dụ:
interface Notifier {
    send(message: string): void
}

class EmailNotifier implements Notifier {
    send(message: string): void{
        console.log("Email: " + message);
    }
}

// logic ban đầu chỉ có tính năng gửi email
const emailNotifier = new EmailNotifier();
emailNotifier.send("Hello");

abstract class NotificationDecorator implements Notifier{
    constructor(private notifier: Notifier ){}
    send(message: string): void{
        this.notifier.send(message);
    }
}

class SMSNotifier extends NotificationDecorator{
    send(message: string): void{
        super.send(message);
        this.sendSMS(message);
    }

    sendSMS(message: string): void{
        console.log("SMS: " + message);
    }

}

// logic sau khi thêm tính năng gửi SMS + email
const smsNotifier = new SMSNotifier(emailNotifier);
smsNotifier.send("Hello");