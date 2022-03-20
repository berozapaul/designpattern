import {UserBuilder} from "./UserBuilder";
import {User} from "./User";

const userObj: User = new UserBuilder('Joe Smith')
    .setAge(24)
    .setPhone("01911016")
    .setAddress("Munich, Germany")
    .build();
console.log(userObj.getName() + " " + userObj.getAge() + " " + userObj.getPhone() + " " + userObj.getAddress());
