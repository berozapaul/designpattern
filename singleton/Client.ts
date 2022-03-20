import { Singleton } from './Singleton';

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

if (singleton1 === singleton2) {
    console.log("Two singleton instances are equivalent");
} else {
    console.log("Two singleton instances are equivalent");
}
