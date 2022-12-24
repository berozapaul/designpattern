export default interface PaymentStrategy {

    collectPaymentDetails(): void;

    validatePaymentDetails(): boolean;

    pay(amount: number): void;

}

