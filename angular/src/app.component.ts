import { IComponent } from "../core/types/component";
import {Injector} from "../core/provider"
import {Component} from "../core/decorator"
import appComponentHtml from './app.component.html'

@Component({
    selector: 'app-root',
    template: appComponentHtml
})

export class AppComponent implements IComponent {
    //inject: Injector
    name: string = 'Angular App 21';
    constructor() {
        console.log('AppComponent initialized 1');
    }

    async render(): Promise<void> {
        const test = new Test()
       
        console.log(Test, '333')
        console.log(this.constructor.prototype,' vao render app component 1')
        const rootElement = document.getElementById('root');

        if(rootElement && this.constructor.prototype._componentMeta.template) {
            rootElement.innerHTML = this.constructor.prototype._componentMeta.template.replace('{{ name }}', this.name)
        }
          
    }
}

class Test {

}


