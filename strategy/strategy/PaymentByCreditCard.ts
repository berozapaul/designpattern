import PaymentStrategy from './PaymentStrategy'

export default class PaymentByCreditCard implements PaymentStrategy {

    public collectPaymentDetails(): void {
        // Pop-up to collect card details...
        console.log("Collecting Card Details...");
    }

    public validatePaymentDetails(): boolean {
        // Validate credit card...
        console.log("Validating Card Info: ");
        return true;
    }

    public pay(amount: number): void {
        console.log("Paying " + amount + " using Credit Card");
    }

}

