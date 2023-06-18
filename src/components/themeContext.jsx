import { createContext } from "react"
import {useMediaQuery} from "react-responsive"
import { useEffect, useState } from "react"

export const themeContext = createContext(null)
const DARKMODE = "dark"

export const UseThemeContextProvider = ({children}) => {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
            setIsDark(prefersDark)
        }
    )

    const [isDark, setIsDark] = useState(systemPrefersDark)

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(DARKMODE)
        }else {
            document.documentElement.classList.remove(DARKMODE)
        }
    }, [isDark])
    return (
        <themeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </themeContext.Provider>
    )
}

