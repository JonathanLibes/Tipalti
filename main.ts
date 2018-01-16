import { App } from "./app/app.ts";
declare var $: any;

let myApp;
let rootSelector='#mainApp';

$(() => myApp = new App(rootSelector));