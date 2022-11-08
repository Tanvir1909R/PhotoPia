import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Blog from './pages/blog/Blog'
import Footer from './components/footer/Footer'
import ServiceDetails from './components/serviceDeails/ServiceDetails'
import Login from './pages/registerLogin/Login'
import Register from './pages/registerLogin/Register'
import AddReview from './components/addReview/AddReview'

const App = () => {
  return (
    <>
        <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/services' element={ <Services/> }/>
          <Route path='/blog' element={ <Blog/> } />
          <Route path='/service/:id' element={ <ServiceDetails/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> } />
          <Route path='/add-review/:name' element={ <AddReview/> }/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App