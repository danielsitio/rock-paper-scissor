import { useState } from "react"
export function useToggle(defaultValue=false){
    const [isToggled, setIsToggled] = useState(defaultValue)
    function toggle(value){
        typeof value === "boolean" ? setIsToggled(value) : setIsToggled(!isToggled) 
    }
    return[isToggled,toggle]
}