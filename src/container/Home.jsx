import React, { useState, useEffect } from "react";
import User from "../components/User"
import Card from "./Card"
import Transactions from "./Transactions"
import styles from "../styles/Home.module.scss";

export default function Home(props) {
    useEffect(() => {
    }, [])
    
    return (
        <div className={styles.container}>
            <User/>
            <Card/>
            <Transactions/>
        </div>
    )
}