import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './Components/Header'
import { FotterComponent } from './Components/FotterComponent'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/signin' element = {<SignIn/>}/>
      <Route path='/signup' element = {<SignUp/>}/>
    </Routes>
    <FotterComponent/>
    </BrowserRouter>
  )
}
