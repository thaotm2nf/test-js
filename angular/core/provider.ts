import { IProvider } from "./types/provider"

export class Injector {
    private providers = new Map<any, any>()
    constructor(private providerConfigs: IProvider[]){
        this.providerConfigs.forEach(providerConfig => {
            const serviceInstance = new providerConfig.useClass()

            this.providers.set(providerConfig.provide, serviceInstance)

        })
    }

    get<T>(token: any){
        return this.providers.get(token)
    }
}