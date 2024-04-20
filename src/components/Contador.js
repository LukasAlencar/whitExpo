import { useState } from "react";
import { Text, Button } from "react-native";

export default ({inicial, passo}) => {
    const [num, setNum] = useState(inicial);
    
    const inc = () => {
        setNum(num + 1)
        num++
        console.warn(num)
    }
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text>
                <Button title="+" onPress={inc}></Button>
                <Button title="-" onPress={dec}></Button>
            </Text>

        </>
    )
}