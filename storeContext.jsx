import { useState } from "react"
import { createContext } from "react"
import { INITIAL_EVENTS } from "./src/data"

export const initialEventsContext = createContext(null)

export const ContextProvider = ({children}) => {
    const [events, setEvents] = useState(INITIAL_EVENTS)

    return (
        <initialEventsContext.Provider value={{events, setEvents}}>
            {children}
        </initialEventsContext.Provider>
    )
}
