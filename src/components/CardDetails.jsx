import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.scss";

export default function CardDetails (props) {
    const {cardNumber, lastFour, spendingLimit} = props

    return (
        <div>
            <p>
                <span>Card Number:</span>
                <span>{cardNumber}</span>
            </p>
            <p>
                <span>Last Four:</span>
                <span>{lastFour}</span>
            </p>
            <p>
                <span>Spending Limit:</span>
                <span>{spendingLimit}</span>
            </p>
        </div>
    )
}