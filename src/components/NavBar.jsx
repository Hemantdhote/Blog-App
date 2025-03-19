
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate();

  function navig(){
    navigate("/board")
  }

  return (
    <div>

      <div className='flex items-center justify-between px-8 py-5 '>
        <Link to="/dashboerd">DashBoard</Link>
        <button onClick={navig}>Logout</button>
      </div>
      
    </div>
  )
}

export default NavBar
