import PaymentStrategy from './PaymentStrategy'

export default class PaymentByPayPal implements PaymentStrategy {

    private email: string;
    private password: string;

    public collectPaymentDetails(): void {
        // Pop-up to collect PayPal account details
        console.log("Collecting PayPal Account Details...");
    }

    public validatePaymentDetails(): boolean {
        // Validate account...
        console.log("Validating PayPal Information");
        return true;
    }

    public pay(amount: number): void {
        console.log("Paying " + amount + " using PayPal");
    }

}

