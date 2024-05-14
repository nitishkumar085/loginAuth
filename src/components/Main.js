import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
  return (
    <div>
        <button><Link to="/login">login</Link></button>
        <button><Link to="/signup">lSignUp</Link></button>
    </div>
  )
}

export default Main