import React from 'react'
import {Link} from 'react-router-dom'

const Nexted = () => {
  return (
    <div>
      <h1>Nexted Page</h1>
      <ul>
        <li><Link to='/nexted/next1'>Nexted1</Link></li>
        <li><Link to='/nexted/next2'>Nexted2</Link></li>
      </ul>
    </div>
  )
}

export default Nexted