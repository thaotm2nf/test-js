//Singleton Pattern: Singleton đảm bảo rằng class chỉ có một instance duy nhất trong suốt vòng đời của một app
// Ex: AngularJS sử dụng singleton pattern để quản lý các service
// Tạo service: @Injectable({
//   providedIn: 'root',  // Đây là cách Angular đảm bảo service là Singleton
// })
// https://github.com/act-node/act-app/blob/5c0e50b6b8122c8e09ba1d110b736612c18769ba/src/app/services/chat-ai/factory-chat-ai.ts#L20


const Singleton = (function() {
    let instance;
    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true, both variables contain the same instance.