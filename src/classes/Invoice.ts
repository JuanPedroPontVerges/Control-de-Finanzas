import { HasFormatter } from '../interfaces/HasFormatter.js' 

export class Invoice implements HasFormatter {
    constructor(
        public client: string,
        public details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} me debe $${this.amount} por ${this.details}`;
    }
}


