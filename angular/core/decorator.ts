import { IComponentMetadata } from "./types/component";
import {IModuleMetadata} from "./types/module"

export function NgModule(metadata: IModuleMetadata) {
    return function (constructor: any){
        constructor.prototype._ngModuleMeta = metadata
    }
}

export function Component(metadata: IComponentMetadata) {
    return function (constructor: any) {
      constructor.prototype._componentMeta = metadata;
    }
}