// Strategy Pattern: Cho phép cậu tạo ra một nhóm các đối tượng mà hoạt động không giống nhau
// và có thể thay thế cho nhau một cách linh hoạt trong thời gian thực thi của chương trình.
// Nó cho phép cậu thay đổi thuật toán được sử dụng bởi một đối tượng tại thời điểm chạy.
// Tưởng tượng cậu đang lái xe và có thể thay đổi hệ thống lái linh hoạt giữa tự động và thủ công tùy theo hoàn cảnh đường xá.

// Có một class shape, có các hình như vuông, tròn, chữ nhât. mỗi hình có cách tính diện tich khác nhau.

var Shipping = function() {
    this.company = "";
};

//
Shipping.prototype = {
    setStrategy: function(company) {
        this.company = company;
    },
    calculate: function(package) {
        return this.company.calculate(package);
    }
};
var UPS = function() {
    this.calculate = function(package) {
// calculations...
        return "$45.95";
    };
};

var USPS = function() {
    this.calculate = function(package) {
// calculations...
        return "$39.40";
    };
};
var Fedex = function() {
    this.calculate = function(package) {
// calculations...
        return "$42.20";
    };
};

var package = { from: "76712", to: "10012", weight: "lkg" };
// Instantiate shipping strategies
var ups = new UPS();
var usps = new USPS();
var fedex = new Fedex();
// Instantiate shipping
var shipping = new Shipping();
shipping.setStrategy(ups);
console.log("UPS Strategy: " + shipping.calculate(package)); // Outputs: UPS Strategy: $45.95
shipping.setStrategy(usps);
console.log("USPS Strategy: " + shipping.calculate(package)); // Outputs: USPS Strategy: $39.40
// Switch to FedEx Strategy
shipping.setStrategy(fedex);
console.log("FedEx Strategy: " + shipping.calculate(package)); // Outputs: FedEx Strategy: $42.20