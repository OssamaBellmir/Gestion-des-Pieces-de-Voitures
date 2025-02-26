import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import{DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { PayPalButton } from 'react-paypal-button-v2';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
