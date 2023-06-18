import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from '../storeContext.jsx'
import { UseThemeContextProvider } from './components/themeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UseThemeContextProvider>
    <ContextProvider>
        <App />
    </ContextProvider>
    </UseThemeContextProvider>
)
