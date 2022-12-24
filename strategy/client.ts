import PaymentService from './PaymentService'
import PaymentByCreditCard from './strategy/PaymentByCreditCard'
import PaymentByPayPal from './strategy/PaymentByPayPal'


const paymentService = new PaymentService();
// The strategy can now be easily picked at runtime
paymentService.setStrategy(new PaymentByCreditCard());
paymentService.processOrder(100);

console.log("==========================================");

paymentService.setStrategy(new PaymentByPayPal());
paymentService.processOrder(100);