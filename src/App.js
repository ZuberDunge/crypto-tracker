import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/HomePage';
import CryptoContextProvider from './Components/Context/CryptoContext';
import CoinView from './Components/CoinView';
function App() {
  return (
    <div className="app">
      <CryptoContextProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/coin/view/:id' element={<CoinView />} />
          </Routes>
        </Router >
      </CryptoContextProvider>

    </div>
  )
}

export default App
