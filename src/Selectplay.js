import React, { useState, useEffect } from "react";
import App from "./App";
import BonusPlay from "./BonusPlay";

const Selectplay = () => {
    const data = localStorage.getItem('playmode')
    const [mode, setMode] = useState('')

    useEffect(() => {
        const gameMode = data ? data : localStorage.setItem('playmode', 'original')
        setMode(gameMode)
    }, [mode])

    const updateCom = () => {
        setMode(localStorage.getItem('playmode'))
    }

    return (
        mode === "original" ? <App updateCom={updateCom} /> : <BonusPlay updateCom={updateCom} />
    )
};

export default Selectplay;
