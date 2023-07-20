import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const CreateUser = () => {
  const [ name,setName ] = useState("")
  const [ email,setEmail ] = useState("")
  const [ age,setAge ] = useState("")
  const navigate = useNavigate()

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/createUser',{ name,email,age })
  .then(result => {
    console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))
  }
  return (
    <>
      <div className="create-user-container">
         <h1>Add User</h1>
         <form onSubmit={handleSubmit}>
          <h3>Name</h3>
          <input 
            type="text"
            placeholder='Enter Name'
            onChange={(e) => setName(e.target.value)}
          />
           <h3>Email</h3>
          <input 
            type="text"
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
          />
           <h3>Age</h3>
          <input 
            type="number"
            placeholder='Enter Age'
            onChange={(e) => setAge(e.target.value)}
          />
          <button className="submit" type='submit'>Submit</button>
         </form>
      </div>
    </>
  )
}

export default CreateUser
