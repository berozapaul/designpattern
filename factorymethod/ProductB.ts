import {AbstractProduct} from "./AbstractProduct";

export class ProductB implements AbstractProduct {
    method = (param?: any) => {
        return "Method of ConcreteProductB";
    }
}
