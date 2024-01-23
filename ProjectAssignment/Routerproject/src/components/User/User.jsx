import React from 'react'
// useParam for taking value or id from URL 
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-orange-600 p-3 text-2xl'>User : {userid} </div>
  )
}

export default User