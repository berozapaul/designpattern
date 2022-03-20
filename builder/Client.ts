import {UserBuilder} from "./UserBuilder";
import {User} from "./User";

const userObj: User = new UserBuilder('')
    .setAge(24)
    .setPhone("01911016")
    .setAddress("Munich, Germany")
    .build();
console.log(userObj.Name + " " + userObj.Age + " " + userObj.Phone + " " + userObj.Address);
