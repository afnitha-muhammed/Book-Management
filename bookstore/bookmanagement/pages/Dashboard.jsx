import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Books from '../components/Books'
import { Link } from 'react-router-dom'


function Dashboard() {
  const [token, settoken] = useState("")
  const [show, setshow] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
    }
  },[token])
  useEffect(()=>{
    gettken()
  },[show])

  const gettken =()=>{
    if(token == ""){
      setshow(false)
    }
    else{
      setshow(true)
    }
  }
  return (
    <div>
     { !show &&<Header />}
    {  !show ?
      
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Books />
        </div>
        <div className="col-md-1"></div>
      </div> 
      :
      <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
       <p className='text-center'>You Have to login</p>
       <Link to={'/'}><button className='btn btn-primary'>Login</button></Link>
      </div>
      
    }
 
</div>
  )
}

export default Dashboard