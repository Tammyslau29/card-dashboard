export function SumOfTransactions(transactions){
    return transactions.reduce((accum, transaction) => {
        console.log(transaction.amount);
        return accum + transaction.amount
    },0)
}

export function AverageOfTransactions(transactions){
    const sum =  SumOfTransactions(transactions)
    return sum / transactions.length
}
