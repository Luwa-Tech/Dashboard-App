import Toggle from "react-toggle"
import "react-toggle/style.css"
import { themeContext } from "./themeContext"
import { useContext } from "react"

const ToggleSwitch = () => {
    const {isDark, setIsDark} = useContext(themeContext)
    return (
        <Toggle 
        checked={isDark}
        onChange={event => setIsDark(event.target.checked)}
        />
    )
}

export default ToggleSwitch