declare var require: any;
declare var $: any;

export class App {
    view: string = require("./app.html");
    node: any = null;
    constructor(rootSelector: string) {
        this.node = this.createElementFromHTML(this.view);
        document.querySelector(rootSelector).appendChild(this.node);
        this.registerEvents();
    }
    onClick() {
    }
    registerEvents() {
        this.node.onclick = this.onClick;
    }
    createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }
}