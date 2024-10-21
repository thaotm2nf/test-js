interface IProduct {
    countPrice():number
}

class Product implements IProduct{
    name: string = '';
    countPrice(): number {
        return 1;
    }
}

class User {
    product: IProduct
    constructor(product: IProduct) {
        this.product = product
    }

    getCountProduct(): number{
        return this.product.countPrice()
    }
}

const user = new User(new Product());

console.log(user.getCountProduct())