import { Invoice } from "Invoice.js"
import { Payment } from "Payment.js"
import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement){}
    render(obj: HasFormatter, heading:string, position:'start' | 'end' ){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = obj.format();
        li.append(p);

        if(position === 'start'){
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}