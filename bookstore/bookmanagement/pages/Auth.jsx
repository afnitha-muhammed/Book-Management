import React, { useState } from 'react'
import logo from '../src/assets/img/logo.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import login from '../src/assets/img/login.jpg'
import { loginApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Auth() {
    const navigate = useNavigate()
    const [userDetails, setuser] = useState({
        email: "",
        password: ""
    })


    const handleupload = async () => {
        const { email, password } = userDetails
        if (!email || !password) {
            toast.info("Please Fill the form Completely")
        }
        else {
            const result = await loginApi({ email, password })
            console.log(result);
            if (result.status == 200) {
                toast.success("Login Successfull")
                alert("Login Successfull")
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token", result.data.token)
                setuser({
                    email: "",
                    password: ""
                })
                navigate('/dashboard')
            }
            else {
                alert(result.response.data)
            }
        }


    }
    return (
        <div>

            <div className="container-fluid bg-primary">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 my-5 bg-white rounded">
                        <div className="row">
                            <div className="col-md-4 p-3 d-flex align-items-center justify-content-center bg-white rounded">
                                <img src={login} alt="" width={'100%'} />
                            </div>
                            <div className="col-md-8 ">
                                <Card style={{ width: '100%' }} className='p-5 mt-3 d-flex align-items-center justify-content-center border-0'>
                                    <Card.Body>
                                        <Card.Title>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <img src={logo} alt="" width={'200px'} className='imgg' />
                                            </div>
                                            <h3 className='text-center'>Books Management</h3>
                                            <h5 className='text-center'>Sign in to Dashboard</h5>
                                        </Card.Title>
                                        <form action="" className='p-3'>
                                            <div className='my-3'>
                                                <input type="text" className='form-control' placeholder='email' onChange={(e) => setuser({ ...userDetails, email: e.target.value })} />
                                            </div>
                                            <div className='my-3'>
                                                <input type="text" className='form-control' placeholder='password' onChange={(e) => setuser({ ...userDetails, password: e.target.value })} />
                                            </div>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <Button type='button' variant="primary" className='btn' onClick={handleupload}>Login</Button>
                                            </div>
                                        </form>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <ToastContainer position='top-center' autoClose={2000} />
        </div>
    )
}

export default Auth