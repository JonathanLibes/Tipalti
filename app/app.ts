import { HtmlTools } from '../share/htmlTools'

declare var require: any;
declare var $: any;


export class App {
    view: string = require("./app.html");
    node: any = null;
    eventsList = [];
    constructor(rootSelector: string) {
        this.node = HtmlTools.createElementAndAppend(rootSelector, this.view);
        this.injectDependecy(this.node);
    }
    onClick() {
        console.log('working');
    }
    injectDependecy(element) {
        element.self = this;
    }
}