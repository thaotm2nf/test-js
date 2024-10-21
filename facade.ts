// Facade Pattern và tính đa hình trong lập trình hướng đối tượng (OOP) có một số điểm tương đồng,
// nhưng chúng phục vụ các mục đích khác nhau trong thiết kế phần mềm

// Facade Pattern giúp che giấu sự phức tạp của hệ thống bằng cách cung cấp một giao diện đơn giản cho client.
// Trong khi đó, tính đa hình trong OOP giúp chúng ta thực hiện một hành động khác nhau dựa trên đối tượng mà chúng ta đang xử lý.
//  Facade không trực tiếp liên quan đến tính đa hình, mặc dù nó có thể tận dụng tính đa hình để đạt được mục đích của mình.
//

// Ví dụ:
// Facade Pattern
interface PaymentGateway{
    pay(amount: number): void

}

class StripePaymentGateway implements PaymentGateway{
    pay(amount: number){
        console.log("Payment made: " + amount);
    }
}

class PayPalPaymentGateway implements PaymentGateway{
    pay(amount: number){
        console.log("Payment made: " + amount);
    }

}

class PaymentFacade{
    constructor(private paymentGateway: PaymentGateway){}
    makePayment(amount: number){
        this.paymentGateway.pay(amount);
    }
}

const paymentFacadeStripe = new PaymentFacade(new StripePaymentGateway());
const paymentFacadePayPal = new PaymentFacade(new PayPalPaymentGateway());
// Không cần quan tâm đến cách thức thực hiện thanh toán, chỉ cần gọi phương thức makePayment
// Facade Pattern giúp che giấu sự phức tạp của hệ thống bằng cách cung cấp một giao diện đơn giản cho client.

paymentFacadeStripe.makePayment(100);


// Một ví dụ khác về Facade Pattern không liên quan đến tính đa hình:
// Facade Pattern
// Hệ thông gửi thông báo qua email và SMS
// Client không cần quan tâm đến cách thức gửi thông báo qua email và SMS, chỉ cần gọi phương thức sendNotification
// Facade Pattern giúp che giấu sự phức tạp của hệ thống bằng cách cung cấp một giao diện đơn giản cho client.
class NotificationService{
    sendEmail(email: string, message: string){
        console.log("Email sent to " + email + ": " + message);
    }

    sendSMS(phone: string, message: string){
        console.log("SMS sent to " + phone + ": " + message);
    }
}

class NotificationFacade{
    constructor(private notificationService: NotificationService){}
    sendNotification(email: string, phone: string, message: string){
        this.notificationService.sendEmail(email, message);
        this.notificationService.sendSMS(phone, message);
    }
}

const notificationFacade = new NotificationFacade(new NotificationService());
notificationFacade.sendNotification("thaotm@gmail.com", "0123456789", "Hello");
