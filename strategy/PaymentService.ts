import PaymentStrategy from './strategy/PaymentStrategy'
export default class PaymentService {

    private cost: number;
    private includeDelivery = true;

    strategy: PaymentStrategy;

    setStrategy (specificStrategy: PaymentStrategy): void {
        this.strategy = specificStrategy;
    }

    public processOrder(cost: number) :void {
        this.cost = cost;
        this.strategy.collectPaymentDetails();
        if (this.strategy.validatePaymentDetails()) {
            this.strategy.pay(this.getTotal());
        }
    }

    private getTotal(): number {
        return this.includeDelivery ? this.cost + 10 : this.cost;
    }

}

