import React, { useState, useEffect } from "react";
import { fetchTransactions } from "../api/transactions";
import { formatTransactionData } from "../utils/Transactions"
import DataTable from "../components/DataTable";

export default function Transactions(props) {
    const [transactions, setTransations] = useState([]);

    useEffect(() => {
        FetchTransactions();
    }, [])

    async function FetchTransactions(){
        const transactions = await fetchTransactions("123abc-456def")
        const formattedTransactions = formatTransactionData(transactions)
        setTransations(formattedTransactions)
    }

    return (
        <div>
            <h1>Transactions</h1>
            <DataTable data={transactions}/>
        </div>
    )
}