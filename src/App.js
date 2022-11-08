import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Blog from './pages/blog/Blog'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/services' element={ <Services/> }/>
          <Route path='/blog' element={ <Blog/> } />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App