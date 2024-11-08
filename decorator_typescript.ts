// decorator class

function Component(metadata: any) {
    return function (constructor: any) {
        constructor.prototype._decoratorMeta = metadata;
    }
}

@Component({
    name: 'Test',
    age: 20
})

class TestComponent {
    
}          
console.log(TestComponent.prototype)
