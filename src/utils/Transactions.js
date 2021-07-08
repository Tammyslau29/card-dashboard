function formatUNIXTimestamp(timestamp) {
    const dateObject = new Date(timestamp);
    let month = dateObject.toLocaleString("en-US", { month: "short" });
    let day = dateObject.toLocaleString("en-US", { day: "numeric" });
    let year = dateObject.toLocaleString("en-US", { year: "numeric" });
    return `${month} ${day}, ${year}`;
}

export function formatMoney(dollar){
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',}).format(dollar)
}

export function formatTransactionData (transactions){
    return transactions.map((transaction, i) => {
        return {
            id: i,
            created_at: formatUNIXTimestamp(transaction.created_at * 1000),
            category: transaction.category,
            amount: formatMoney(transaction.amount),
            merchant: transaction.merchant,
        }
    })
}
