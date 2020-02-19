import React, { useState, useEffect } from 'react'
import image from './Main.png'
import './Main.scss'

const Main = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')


    const [join, setJoin] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('/person/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                name: name,
                email: email,
                city: address
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))

        setJoin(true)
    }
    return <section id='Main'>
        <div id="backgroundImgMain" />
        <div id="titleContainer">
            <h2 id='title'>Wild Circus</h2>
            <h3 id='subTitle'>Worlds most exciting Circus Show is on the road again</h3>
        </div>

        {
            !join ?
                <div id="formContainer">
                    <h5>Join our newsletter to keep in touch and let you know if we planned a show around you</h5>
                    <form onSubmit={handleSubmit}>
                        <div id='nameContainer'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} />
                        </div>
                        <div id='emailContainer'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div id='addressContainer'>
                            <label htmlFor="address">Address</label>
                            <input type="text" name="adress" id="address" onChange={e => setAddress(e.target.value)} />
                        </div>
                        <button id='btn-submit' type="submit">Join!</button>
                    </form>
                </div> :
                <div id="ty">
                    <h4>Thank you for joining us.</h4>
                    <h5>You will recieve an email with all the details and your monthly newsletter.</h5>
                </div>
        }
    </section >
}

export default Main