import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import PWAPrompt from 'react-ios-pwa-prompt'
import { isIOS } from 'helpers/device'

function App() {
    return (
        <>
            {isIOS() && (
                <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
            )}
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </>
    )
}

export default App
