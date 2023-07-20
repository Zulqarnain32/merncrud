import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import "./App.css"
import User from './components/User'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<User/>}/>
          <Route path = "/create" element = {<CreateUser/>}/>
          <Route path = "/update/:id" element = {<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
