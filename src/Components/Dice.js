import React from "react";

export default function Dice({key, value, isHeld, id , holdDice}) {
    const style = {
        backgroundColor: isHeld ? "#626F47" : null
    }
    return (
        <>
        <button onClick={holdDice} style={style} key={key}>{value}</button>
        </>
    )
    }