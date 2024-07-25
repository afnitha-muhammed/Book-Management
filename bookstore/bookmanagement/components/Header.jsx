import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const logout =()=>{
      sessionStorage.removeItem("token","existinguser")
      navigate('/')
  }

  return (
    <div>

<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{height:'100px'}}>
  <div class="container-fluid">
    <Link to={'/'} style={{textDecoration:'none'}}><h3 className='text-white fw-bolder'>VB Books</h3></Link>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className='ms-auto me-5'>
      <button className='btn btn-outline-success' onClick={logout}>Logout</button>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header