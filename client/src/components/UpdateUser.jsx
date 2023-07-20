import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import axios from "axios"

const UpdateUser = () => {
  const { id } = useParams()
  const [ name,setName ] = useState("")
  const [ email,setEmail ] = useState("")
  const [ age,setAge ] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/getUser/'+ id)
    .then(result => {
      console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/updateUser/'+ id ,{ name,email,age })
   .then(result => {
     console.log(result)
     navigate('/')
    })
   .catch(err => console.log(err))
  }

  

  
  return (
    <>
      <div className="create-user-container">
         <h1>Update</h1>
         <form onSubmit={handleUpdate}>
          <h3>Name</h3>
          <input 
            type="text"
            placeholder='Enter Name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
           <h3>Email</h3>
          <input 
            type="text"
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
           <h3>Age</h3>
          <input 
            type="number"
            placeholder='Enter Age'
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          {/* <button className="submit" type='submit'><Link to = "/" className='update-btn-link'>Update</Link></button> */}
          <button className="submit" type='submit'>Update</button>
         </form>
      </div>
    </>
  )
}

export default UpdateUser
