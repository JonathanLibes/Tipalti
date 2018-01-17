declare var require: any;
declare var $: any;

export class App {
    view: string = require("./app.html");
    rootElement: any = null;
    constructor(rootSelector: string) {
        this.rootElement = $(this.view);
        $(rootSelector).append(this.rootElement);
    }
    onClick() {
        console.log("clicked worked !!!");
    }
}