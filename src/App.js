import React from 'react';
import { getWebWalletUrl } from './libs/util';
import { SessionProvider } from './libs/session';

import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './page/main';

let apiPrefix = '/';
if (window.blocklet && window.blocklet.prefix) {
  apiPrefix = window.blocklet.prefix;
} else if (window.env && window.env.apiPrefix) {
  apiPrefix = window.env.apiPrefix;
}

function App() {
  const webWalletUrl = getWebWalletUrl();

  return (
    <SessionProvider
      serviceHost={apiPrefix}
      webWalletUrl={webWalletUrl}
    >
      <CssBaseline />
      <Main />
    </SessionProvider>
  );
}

export default App;
