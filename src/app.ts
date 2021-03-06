import { Invoice } from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"
import {ListTemplate } from "./classes/ListTemplate.js"


const form = document.querySelector('form')!;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const button = document.querySelector('button')!
const ul = document.querySelector('.item-list') as HTMLUListElement;

const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if(type.value === 'factura') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value,'end');
});

