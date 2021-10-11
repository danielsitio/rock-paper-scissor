import { useState } from "react";

export function useCounter(deafultValue=0) {

    const [counter, setCounter] = useState(deafultValue)

    function add(value=1){
        setCounter(counter+value)
    }
    function substract(value=1){
        setCounter(counter-value)
    }

    return [counter,add,substract]
}
