import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.scss";

export default function CardDetails (props) {
    const {totalSpend, averageSpend} = props

    return (
        <div>
            <p>
                <span>Total Spend:</span>
                <span>{totalSpend}</span>
            </p>
            <p>
                <span>Average Spend:</span>
                <span>{averageSpend}</span>
            </p>
        </div>
    )
}