import { Module } from "./module"


class PlatformBrowserDynamic{
        bootstrapModule(moduleClass: any){
            console.log('Vao main')
            // init module and render app
            const moduleInstance = new moduleClass()
            
            const metadata = moduleInstance._ngModuleMeta

            const appModule = new Module(
                metadata.declarations,
                metadata.imports,
                metadata.providers,
                metadata.exports,
                metadata.bootstrap
            )

            console.log(metadata.bootstrap, 'metadata.bootstrap')

            appModule.initializeModule()
        }
}

export function platformBrowserDynamic() {
    return new PlatformBrowserDynamic()
}