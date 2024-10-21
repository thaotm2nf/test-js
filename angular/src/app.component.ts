import { IComponent } from "../core/types/component";
import {Injector} from "../core/provider"
import {Component} from "../core/decorator"

@Component({
    selector: 'app-root',
    template: `<h1>Hello from {{ name }}!</h1>`
})
export class AppComponent implements IComponent {
    //inject: Injector
    name: string = 'Angular App';
    constructor() {
        console.log('AppComponent initialized');
      }
    

    render(): void {
        console.log(' vao render app component')
        const meta = this.constructor.prototype._componentMeta
        const rootElement = document.getElementById('root');

        if(rootElement && meta) {
            rootElement.innerHTML = meta.template.replace('{{ name }}', this.name)
        }

    }


}