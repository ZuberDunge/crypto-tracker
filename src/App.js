import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import StudentData from './Components/StudentData';
import Home from './Components/HomePage';
import Main from './Main';
import Contact from './Components/Contact';
import AddNew from './Components/AddNew';
import StudentContextProvider from './Components/Context/StudentContext';
import StudentDataView from './Components/StudentDataView';
function App() {
  return (
    <div className="app">
      <StudentContextProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/students' element={<Main />} />
            <Route path='/students/view/:id' element={<StudentDataView />} />
            <Route path='/students/edit/:id' element={<StudentData />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/add-new' element={<AddNew />} />
          </Routes>
        </Router >
      </StudentContextProvider>

    </div>
  )
}

export default App
