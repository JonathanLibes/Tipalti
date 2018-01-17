import { HtmlTools } from '../share/htmlTools'

declare var require: any;
declare var $: any;


export class App {
    view: string = require("./app.html");
    node: any = null;
    model: any = {
        counter: 0,
        buttonText: "asa"
    };
    renderFunctions: any = {
        counter: () => {
            debugger;
            document.getElementById("counter").innerHTML = this.model.counter;
        }
    }
    constructor(rootSelector: string) {
        this.node = HtmlTools.createElementAndAppend(rootSelector, this.view);
        this.watchModel();
        this.injectDependecy(this.node);
    }
    onClick() {
        this.model.counter++;
        this.model.buttonText = 'buttonText';
    }
    injectDependecy(element) {
        element.self = this;
    }
    watchModel() {
        var keys = Object.keys(this.model);
        keys.forEach(key => this.model.watch(key, (key) => this.render(key)));
    }
    render(key) {
        let renderFunc = this.renderFunctions[key];
        renderFunc();
    }
}