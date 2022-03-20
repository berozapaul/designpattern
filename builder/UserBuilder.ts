import { User } from "./User";

export class UserBuilder {
    private name: string;
    private age: number;
    private phone: string;
    private address: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    setAge(value: number): UserBuilder {
        this.age = value;
        return this;
    }
    getAge() {
        return this.age;
    }
    setPhone(value: string): UserBuilder {
        this.phone = value;
        return this;
    }
    getPhone() {
        return this.phone;
    }
    setAddress(value: string): UserBuilder {
        this.address = value;
        return this;
    }
    getAddress() {
        return this.address;
    }

    build(): User {
        return new User(this);
    }
}
