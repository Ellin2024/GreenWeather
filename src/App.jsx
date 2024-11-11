import React from 'react'
import Weather from './components/Weather'
import CoverPage from './components/CoverPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './components/Weather.css'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<CoverPage/>} />
          <Route path='/weather' element={<Weather/>} />
        </Routes>
      </Router>
    </div>
  )
}  

export default App