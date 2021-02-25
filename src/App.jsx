import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import PWAPrompt from 'react-ios-pwa-prompt';
import { isIOS } from 'helpers/device';
import ScrollToTop from 'components/ScrollToTop';

function App() {
  return (
    <>
      {isIOS() && (
        <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
      )}
      <BrowserRouter>
        <Routes />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
