import React from 'react'
import '../App.css'

const userOutput = (props) => {
  
  return (
    <div className='userCards'>
      <p>{props.name}</p>
      <p>{props.lastName}</p>
    </div>
  )
}

export default userOutput