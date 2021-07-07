import React, { useState, useEffect } from "react";
import { fetchUserInformation } from "../api/user.ts"

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
        <div>
            <p>Hello, {name}</p>
            <p>{email}</p>
        </div>
    )
}