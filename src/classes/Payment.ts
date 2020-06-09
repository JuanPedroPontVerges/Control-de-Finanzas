import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        public details: string,
        public amount: number
    ) { }

    format() {
        return `Le compre a ${this.recipient} por ${this.details} a $${this.amount}`;
    }
}


