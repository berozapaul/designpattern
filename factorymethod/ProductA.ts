import {AbstractProduct} from "./AbstractProduct";

export class ProductA implements AbstractProduct {
    method = (param?: any) => {
        return "Method of ConcreteProductA";
    }
}
