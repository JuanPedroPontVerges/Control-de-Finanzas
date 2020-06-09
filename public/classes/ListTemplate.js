export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(obj, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = obj.format();
        li.append(p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
