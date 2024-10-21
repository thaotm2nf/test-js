//Module Pattern: Khuyến khích việc đóng gói và bảo mật thông tin
// giúp hạn chế sự xung đột trong không gian tên và cung cấp tính năng private và public.
// Đây là nghệ thuật trong việc đảm bảo tính bảo mật và tổ chức code khoa học.
// Không bao giờ để lộ bí mật nhờ vào cách thức đóng gói và quản lý scope.
// Hãy tưởng tượng Module Pattern là căn phòng riêng của bạn trong ngôi nhà chung JavaScript,
// nơi ban có thể bảo vệ và giữ gìn các biến quan trọng khỏi tình trạng "hỗn loạn toàn cầu".

var ShoppingCart = (function() {
    var basket = []; // private
    function addItem(item) {
        basket.push(item);
    }
    function getItemCount() {
        return basket.length;
    }
    function getTotal() {
        return basket.reduce(function(total, item) {
            return total + item.price;
        }, 0);
    }
// Reveal public pointers to the private functions
    return {
        add: addItem,
        count: getItemCount,
        total: getTotal
    };
})();

ShoppingCart.add({ item: 'bread', price: 0.5 });
ShoppingCart.add({ item: 'butter', price: 1.5 });
console.log(ShoppingCart.count()); // Outputs: 2
console.log(ShoppingCart.total()); // Outputs: 2

import {Test} from "./promise";
class Collection extends Test {
    constructor() {
        super();
    }

}
