import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Addbook from './Addbook';
import { getbookApi } from '../services/allApi';


function Books() {
    const [bookdetails, setbookdetails] = useState([])

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = async () => {
        const book = await getbookApi()
        setbookdetails(book.data.allbook)
        console.log(bookdetails);
    }

    return (
        <div>
            <div className='d-flex'>
                <h3 className='mt-5'>Book Details</h3>
                <div className='ms-auto mt-5'>
                    < Addbook />
                </div>

            </div>
            <Card className='shadow my-5'>
                <Card.Body>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Price</th>
                                <th scope="col">Published Year</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        {
                            bookdetails?.length > 0 ?
                                bookdetails?.map((item, index) => (
                                    <tbody>
                                        <tr class="table">
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.author}</td>
                                            <td>{item.price}</td>
                                            <td>{item.year}</td>
                                            <td>
                                                <div className='d-flex aliign-items-center'>
                                                    <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#63E6BE", }} />
                                                    <button type='button' className='btn btn-outline-light'><FontAwesomeIcon icon={faTrashCan} style={{ color: "#63E6BE", }} className='ms-2' /></button>
                                                    <FontAwesomeIcon icon={faEye} style={{ color: "#63E6BE", }} className='ms-2' />

                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))

                                :
                                <p>No Items</p>}
                    </table>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Books