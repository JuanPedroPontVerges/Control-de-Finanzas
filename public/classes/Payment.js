export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Le compre a ${this.recipient} por ${this.details} a $${this.amount}`;
    }
}
