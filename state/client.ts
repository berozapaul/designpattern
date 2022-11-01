import { Context, startOrder, finishOrder } from './state'


let context: Context = new Context(new startOrder());
context.request();

context = new Context(new finishOrder());
context.request();
