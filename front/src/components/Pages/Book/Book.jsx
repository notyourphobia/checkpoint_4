import React, { useState, useEffect } from 'react'
import image from './Book.png'
import Modal from 'react-modal';

Modal.setAppElement('#root')

const customStyles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


const Book = (props) => {

    const [open, setOpen] = useState(null)
    const [openedId, setOpenedId] = useState(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleBook = (e) => {
        setOpen(true)
        setOpenedId(e.target.value)
    }

    const handleModalSubmit = (e) => {
        e.preventDefault()

        fetch(`/attend/${openedId}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))

        setOpen(false)
    }

    return <section id='Book'>

        <Modal
            isOpen={open}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div>Enter your details to attend the show.</div>
            <form>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={event => setName(event.target.value)} />
                </div>

                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={event => setEmail(event.target.value)} />
                </div>
                <div className="btn">
                    <button type='submit' style={{ width: '52%' }} onClick={handleModalSubmit}>Book Now!</button>
                    <button type='submit' style={{ width: '40%' }} onClick={() => setOpen(false)}>Close!</button>
                </div>
            </form>
        </Modal>



        <div id="backgroundImgBook" />
        <div className="book">
            <table>
                <tr>
                    <th>City</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Seats</th>
                    <th>Book</th>
                </tr>
                {
                    props.fetchData &&
                    props.fetchData.map((e, i) => <tr key={i}>
                        <td>{e.city}</td>
                        <td>{e.address}</td>
                        <td>{e.date}</td>
                        <td>{e.duration} min</td>
                        <td>{e.price}$</td>
                        <td>{e.seats} left</td>
                        <td>
                            <button className="bookBtn" value={e.id} onClick={handleBook}>
                                Book Now!
                            </button>
                        </td>
                    </tr>)
                }
            </table>
        </div>
    </section>
}

export default Book