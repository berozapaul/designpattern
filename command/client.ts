import {AddToCart, AddToWishList, Invoker, Receiver} from "./command";

const receiver = new Receiver();
const addToCart  = new AddToCart(receiver);
const wishList = new AddToWishList(receiver);
const invoker  = new Invoker();

invoker.storeAndExecute(addToCart);
invoker.storeAndExecute(wishList);
console.log(invoker.getCommands())
