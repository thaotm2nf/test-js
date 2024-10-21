export declare interface IModule<TComponent> {
    declarations: any[]
    imports: IModule<any>[]
    providers: any[]
    exports: any[]
    bootstrap?: { new(): any},
    initializeModule: Function
}

export declare interface IModuleMetadata{
    declarations: any[]
    imports: IModule<any>[]
    providers: any[]
    exports: any[]
    bootstrap?: { new(): any},
}