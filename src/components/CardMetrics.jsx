import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.scss";

export default function CardDetails (props) {
    const {totalSpend, averageSpend} = props

    return (
        <div>
            <p className={styles.cardText}>
                <b>Total Spend:</b>
                <span>{totalSpend}</span>
            </p>
            <p className={styles.cardText}>
                <b>Average Spend:</b>
                <span>{averageSpend}</span>
            </p>
        </div>
    )
}