import React from 'react';
import { LocaleProvider } from '@arcblock/ux/lib/Locale/context';
import { SessionProvider } from './libs/session';

import CssBaseline from '@mui/material/CssBaseline';

import Main from './page/main';

let apiPrefix = '/';
if (window.blocklet && window.blocklet.prefix) {
  apiPrefix = window.blocklet.prefix;
} else if (window.env && window.env.apiPrefix) {
  apiPrefix = window.env.apiPrefix;
}

function App() {

  return (
    <LocaleProvider translations={{}}>
      <SessionProvider
        serviceHost={apiPrefix}
      >
        <CssBaseline />
        <Main />
      </SessionProvider>
    </LocaleProvider>
  );
}

export default App;
