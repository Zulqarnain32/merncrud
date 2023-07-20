import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const User = () => {
    const [ user,setUser ] = useState([])
    useEffect(() => {
      axios.get('http://localhost:5000')
      .then(result => setUser(result.data))
      .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
      axios.delete('http://localhost:5000/deleteUser/'+id )
      .then(result => {
        console.log(result)
        window.location.reload()
      })
      .catch(err => console.log(err))

    }

  return (
    <>
      <div className="user-container">
      <button className='update-btn adduser'><Link to = "/create" className='update adduser'>Add</Link></button>

        <table>
            <thead>
                <tr className='table-rows'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              
                {
                    user.map((user) => (
                        <tr className='table-rows '>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <button className='update-btn'><Link to = {`update/${user._id}`} className='update'>Update</Link></button>
                                <button className='delete' onClick={(e) => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </>
  )
}

export default User
