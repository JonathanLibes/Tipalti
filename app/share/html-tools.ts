export class HtmlTools {
    static createElement(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }
    static createElementAndAppend(selector, htmlString) {
        let node = HtmlTools.createElement(htmlString);
        document.querySelector(selector).appendChild(node);
        return node;
    }
}