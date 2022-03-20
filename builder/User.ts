import { UserBuilder } from "./UserBuilder";

export class User {
    private name: string;
    private age: number;
    private phone: string;
    private address: string;

    constructor(builder: UserBuilder) {
        this.name = builder.getName();
        this.age = builder.getAge();
        this.phone = builder.getPhone();
        this.address = builder.getAddress()
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getPhone() {
        return this.phone;
    }
    getAddress() {
        return this.address;
    }
}
