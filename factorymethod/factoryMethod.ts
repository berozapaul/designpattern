import {AbstractProduct} from "./AbstractProduct";
import {ProductA} from "./ProductA";
import {ProductB} from "./ProductB";

export function getProductInstance(type: string) : AbstractProduct {
    if (type === "A") {
        return new ProductA();
    } else if (type === "B") {
        return new ProductB();
    }

    return null;
}
