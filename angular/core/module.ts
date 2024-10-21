import { Injector } from "./provider";
import { IModule } from "./types/module";
import { IProvider } from "./types/provider";


export class Module<TComponent> implements IModule<TComponent> {
    constructor(
        public declarations: any[],
        public imports: Array<IModule<any>>,
        public providers: IProvider[], 
        public exports: any[],
        public bootstrap?: { new(): any},
    ) {}

    initializeModule() {
        console.log('vao app')
        // register DI
        const injector = new Injector(this.providers)
        
        // init modules import
        this.imports.forEach((importedModule) => {
            importedModule.initializeModule()
        })

        console.log(this.bootstrap)
        if(this.bootstrap) {
            console.log('vao app component')
            const componentInstance = new this.bootstrap()

            console.log(componentInstance, 'componentInstance')

            componentInstance.injector = injector

            componentInstance.render()

        }
    
    }
}