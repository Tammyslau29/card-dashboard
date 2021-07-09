import React, { useState, useEffect } from "react";
import { fetchUserInformation } from "../api/user.ts"
import styles from "../styles/User.module.scss";

export default function User(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        Init()
    }, [])

    async function Init(){
        const user =  await fetchUserInformation("123abc-456def")
        setName(user.name)
        setEmail(user.email)
    }
    return (
        <div className={styles.userContainer}>
            <p>Welcome, {name}</p>
        </div>
    )
}