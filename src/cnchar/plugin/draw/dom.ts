export function querySelector (selector: string | HTMLElement): HTMLElement {
    if (typeof selector !== 'string') {
        return selector;
    }
    let dom = document.querySelector(selector);
    if (dom === null) {
        dom = createElement('div');
        document.body.appendChild(dom);
    }
    return dom as HTMLElement;
}

export function createElement (tag: string): HTMLElement {
    return document.createElement(tag);
}