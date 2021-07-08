import axios from "axios";
import { mockTransactions } from "../mock/card"
import { ITransaction } from "../models/Transactions";

export function fetchTransactions(userId: string):Promise<ITransaction[]>  {
    return axios.get(`transactions/user?id=${userId}`).then((response) => {
        return mockTransactions
    }).catch((error) => {
        console.log("Error fetchTransactions", error)
        return mockTransactions
    })
}