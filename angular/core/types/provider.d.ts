// define how to provide a service
export declare interface IProvider {
    provide: any // type service
    useClass: { new(): any} //  is constructor function. So, it can init instance from class 
}