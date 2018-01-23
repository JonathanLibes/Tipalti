import { HtmlTools } from './../share/html-tools'
import { ComponentViewModel } from './component-model'
declare var require: any;
declare var $: any;

export class Component {
    static view: string = require("./component.html");
    static selector: string = 'app';
    vm: any = null
    node: any = null;
    renderFunctions: any = {}
    constructor() {
        debugger;
        this.vm = new ComponentViewModel();
        let rootSelector = Component.selector;
        let htmlString = Component.view;
        this.node = HtmlTools.createElementAndAppend(rootSelector, htmlString);
        this.startWatchModel();
        this.injectDependecy(this.node);
        this.injectNestedDependecy(this.node);
    }
    injectNestedDependecy(node) {
        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            this.injectNestedDependecy(child);
            this.injectDependecy(child);
        }
    }
    injectDependecy(element) {
        element.self = this;
    }
    startWatchModel() {
        var keys = Object.keys(this.vm);
        keys.forEach(key => this.vm.watch(key, (id, oldval, newval) => {
            this.render(key);
            return newval
        }));
    }
    render(key) {
        let renderFunc = this.renderFunctions[key];
        renderFunc
            ? renderFunc()
            : Function();
    }
}