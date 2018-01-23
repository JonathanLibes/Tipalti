import { App } from "./app/app";

declare var $: any;

let myApp;
$(()=>createApp());

function createApp() {
    myApp = new App();
}