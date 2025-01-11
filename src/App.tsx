import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { LoginPage } from './pages/LoginPage/LoginPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
