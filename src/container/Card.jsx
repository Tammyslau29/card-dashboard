import React, { useState, useEffect } from "react";
import { fetchCardInformation } from "../api/card.ts";
import { fetchTransactions } from "../api/transactions";
import { SumOfTransactions, AverageOfTransactions } from "../utils/cardMetrics";
import { formatMoney } from "../utils/Transactions";
import CardDetails  from "../components/CardDetails";
import CardMetrics  from "../components/CardMetrics";
import styles from "../styles/Card.module.scss";

export default function Card(props) {
    const [cardNumber, setCardNumber] = useState(0)
    const [lastFour, setLastFour] = useState(0)
    const [spendingLimit, setSpendingLimit] = useState(0)
    const [totalSpend, setTotalSpend] = useState(0)
    const [averageSpend, setAverageSpend] = useState(0)


    useEffect(() => {
        FetchCardInfo();
        FetchTransactions();
    }, [])

    async function FetchCardInfo(){
        const cardDetails =  await fetchCardInformation("123abc-456def")
        setCardNumber(cardDetails.number)
        setLastFour(cardDetails.last_four)
        setSpendingLimit(formatMoney(cardDetails.spending_limit))
    }

    async function FetchTransactions(){
        const transactions = await fetchTransactions("123abc-456def")
        const total = SumOfTransactions(transactions)
        const average = AverageOfTransactions(transactions).toFixed(2)
        console.log(transactions);
        setTotalSpend(formatMoney(total))
        setAverageSpend(formatMoney(average))
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardWrapper}>
                <h1>Card Information</h1>
                <CardDetails cardNumber={cardNumber} lastFour={lastFour} spendingLimit={spendingLimit}/>
            </div>
            <div className={styles.cardWrapper}>
                <h1>Card Metrics</h1>
                <CardMetrics totalSpend={totalSpend} averageSpend={averageSpend}/>
            </div>
        </div>
    )
}