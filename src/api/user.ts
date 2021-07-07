import axios from "axios";
import { mockUser } from "../mock/user"
import { IUser } from "../models/User";

export function fetchUserInformation(userId):Promise<IUser>  {
    return axios.get(`/user?id=${userId}`).then((response) => {
        return mockUser
    }).catch((error) => {
        console.log("Error fetchUserInformation", error)
        return mockUser
    })
}
