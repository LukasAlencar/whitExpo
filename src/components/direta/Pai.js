import React from 'react'
import Filho from './Filho'

export default ({}) => {
    let x = 100
    let y = 200

    const exibirValor = (num) => {
        console.warn(num)
    }

    return (
        <Filho max={x} min={y} exibirValor={exibirValor}></Filho>
    )
}