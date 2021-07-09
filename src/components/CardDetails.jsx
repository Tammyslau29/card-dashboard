import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.scss";

export default function CardDetails (props) {
    const {cardNumber, lastFour, spendingLimit} = props

    return (
        <div>
            <p className={styles.cardText}>
                <b>Card Number:</b>
                <span>{cardNumber}</span>
            </p>
            <p className={styles.cardText}>
                <b>Last Four:</b>
                <span>{lastFour}</span>
            </p>
            <p className={styles.cardText}>
                <b>Spending Limit:</b>
                <span>{spendingLimit}</span>
            </p>
        </div>
    )
}