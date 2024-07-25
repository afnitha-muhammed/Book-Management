import React, { useEffect, useState } from 'react';
import { Button, ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



function Addbook() {
    const [show, setShow] = useState(false);
    const [token, settoken] = useState("")
    const [book, setbook] = useState({
        name: "",
        description: "",
        price: "",
        author: "",
        language: "",
        year: "",
        cover_image: "",
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // const token = sessionStorage.getItem("token",token)
        // settoken(token)
    })

    const handleAdd = async () => {

        const book = await AddBookApi()
        if (book.status == 200)
        {
            alert("Sucessfully Added")
        }
        else 
        {
        alert("something Went Wrong")
        }
    }

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add New Book
            </Button>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Book Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className='mt-3'>
                            <input type="text" className='form-control' placeholder='Name' onChange={(e) => setbook({ ...book, name: e.target.value })} />
                        </div>
                        <div className='mt-3'>
                            <input type="text" className='form-control' placeholder='Description' onChange={(e) => setbook({ ...book, description: e.target.value })} />
                        </div>
                        <div className='mt-3'>
                            <input type="text" className='form-control' placeholder='Price' onChange={(e) => setbook({ ...book, price: e.target.value })} />
                        </div>
                        <div className='mt-3'>
                            <input type="text" className='form-control' placeholder='Author' onChange={(e) => setbook({ ...book, author: e.target.value })} />
                        </div>
                        <div className='mt-3'>
                            <input type="text" className='form-control' placeholder='Language' onChange={(e) => setbook({ ...book, language: e.target.value })} />
                        </div>
                        <div className='mt-3'>
                            <input type="text" className='form-control' placeholder='Published year' onChange={(e) => setbook({ ...book, year: e.target.value })} />
                        </div>
                        <div className='mt-3'>
                            <input type="text" className='form-control' placeholder='Cover Image' onChange={(e) => setbook({ ...book, cover_image: e.target.value })} />
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Addbook