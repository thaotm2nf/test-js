// Factory Pattern: Sử dụng một hàm tạo ra đối tượng để tạo ra các instances của obj
// mà không cần chỉ định chính xác classname nào sẽ được tạo ra.
// Khi cậu cần tạo đối tượng nhưng không muốn ràng buộc với lớp cụ thể nào, hãy nghĩ đến Factory Pattern.
// Đó là như một cửa hàng nơi cậu chỉ cần miêu tả sản phẩm bạn muốn và cửa hàng sẽ tạo ra nó cho bạn.

// Ví dụ tạo xe. Chỉ cần mô tả tạo cho tao xe máy thì xe máy sẽ dc tạo ra. oto thì oto sẽ đc tạo ra
// Không cần quan tâm tạo ra xe máy hay oto thì cần phải làm gì. Chỉ cần mô tả là đc
// Ví dụ dưới đây tạo ra 1 factory để tạo ra các loại xe
// Có 2 loại xe là car và truck
// Có 2 thuộc tính chung là color và state
// Có 2 thuộc tính riêng là doors và wheelSize
// Có 1 factory để tạo ra các loại xe


// 1. Factory Method Pattern
function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

function Truck(options) {
    this.wheelSize = options.wheelSize || "large";
    this.state = options.state || "used";
    this.color = options.color || "blue";
}

//
function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle =
    function(options) {
        if (options.vehicleType === "car") {
            this.vehicleClass = Car;
        } else {
            this.vehicleClass = Truck;
        }

        return new this.vehicleClass(options);
    };


var carFactory = new VehicleFactory();

var car = carFactory.createVehicle({
    vehicleType: "car",
    color: "yellow",
    doors: 6
});

console.log(car instanceof Car); // Outputs: true