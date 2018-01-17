import { HtmlTools } from '../share/htmlTools'

declare var require: any;
declare var $: any;


export class App {
    view: string = require("./app.html");
    node: any = null;
    eventsList = [];
    constructor(rootSelector: string) {
        this.node = HtmlTools.createElementAndAppend(rootSelector, this.view);
        this.registerEvents();
    }
    onClick() {
    }
    registerEvents() {
        this.eventsList.push(this.registerEvent(this.node, 'onclick', this.onClick));
    }
    registerEvent(element, eventName, eventHandler) {
        let returnVal = { element: element, eventName: eventName, eventHandler: eventHandler, succeededRegister: false };
        if (!element || !eventName || !eventHandler || !(eventName in element)) {
            return returnVal;
        }
        element[eventName] = eventHandler;
        returnVal.succeededRegister = true;
        return returnVal;
    }
}