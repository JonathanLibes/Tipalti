declare var $:any;
export class App {
    view: string = '<div>Hello</div>';
    rootElement :object = null;
    constructor(rootSelector:string) {
        this.rootElement=$(rootSelector).append(this.view);
        console.log(this.rootElement);
    }
}