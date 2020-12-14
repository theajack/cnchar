export function querySelector (selector: string | HTMLElement): HTMLElement {
    if (typeof selector !== 'string') {
        return selector;
    }
    let dom: HTMLElement = document.querySelector(selector);
    if (dom === null) {
        dom = createElement('div');
        document.body.appendChild(this.el);
    }
    return dom;
}

export function createElement (tag: string): HTMLElement {
    return document.createElement(tag);
}