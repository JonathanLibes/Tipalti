import {HtmlTools} from './share/html-tools'
import {AppViewModel} from './app-model'
declare var require : any;
declare var $ : any;

export class App {
    view : string = require("./app.html");
    vm : any = null
    node : any = null;
    renderFunctions : any = {
        counter: () => {
            document
                .getElementById("counter")
                .innerHTML = this.vm.counter;
        }
    }
    constructor(rootSelector : string) {
        this.vm = new AppViewModel();
        this.node = HtmlTools.createElementAndAppend(rootSelector, this.view);
        this.startWatchModel();
        this.injectDependecy(this.node);
        this.injectNestedDependecy(this.node);
    }
    onClick() {
        this.vm.counter++;
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