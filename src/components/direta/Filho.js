import React from 'react'
import { Button, Text } from 'react-native'

export default ({min, max, exibirValor}) => {

    const gerarNum = (min, max) =>{
        const fator = max - min + 1;

        return parseInt(Math.random() * fator) + min;
    }

    return (
        <>
            <Button 
                title='Executar'
                onPress={()=>{
                    exibirValor(gerarNum(min, max))
                }}
            />
        </>
    )
}