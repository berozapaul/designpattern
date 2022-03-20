import {getProductInstance} from "./factoryMethod";
import {AbstractProduct} from "./AbstractProduct";

const a: AbstractProduct = getProductInstance("A");
const b: AbstractProduct = getProductInstance("B");

console.log(a.method());
console.log(b.method());
