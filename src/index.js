import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider,theme} from"@chakra-ui/react";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
     </ChakraProvider>
  </React.StrictMode>
);
export const server='https://api.coingecko.com/api/v3';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
 