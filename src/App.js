import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/HomePage';
import Main from './Main';
import Contact from './Components/Contact';

import CryptoContextProvider from './Components/Context/CryptoContext';
import StudentDataView from './Components/StudentDataView';
function App() {
  return (
    <div className="app">
      <CryptoContextProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/students' element={<Main />} />
            <Route path='/coin/view/:id' element={<StudentDataView />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>
        </Router >
      </CryptoContextProvider>

    </div>
  )
}

export default App
