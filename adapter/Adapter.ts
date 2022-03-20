import {Target} from "./Target";
import {Adaptee} from "./Adaptee";

export class Adapter implements Target {
    public call(): void {
        console.log("Adapter's `call` method is being called");
        const adaptee: Adaptee = new Adaptee();
        adaptee.method();
    }
}
