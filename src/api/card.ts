import axios from "axios";
import { mockCardInformation } from "../mock/card"
import { ICard } from "../models/Card";

export function fetchCardInformation(userId: string):Promise<ICard>  {
    return axios.get(`card/user?id=${userId}`).then((response) => {
        return mockCardInformation
    }).catch((error) => {
        console.log("Error fetchCardInformation", error)
        return mockCardInformation
    })
}