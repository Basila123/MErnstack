import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import SignUp from './Pages/SignUp'
import Project from './Pages/Project'
import LogIn from './Pages/LogIn'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <>
      <h1 className='text-3xl text-red-500'>MernstackPRoject</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>

        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App