
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

export default function GoingPage() {
    const dispatch = useDispatch();
    const [guests, setGuests] = useState([]);
    useEffect(() => {
        axios.get('/going')
        .then(resp => {
            setGuests(resp.data)
        })
    }, [])
    console.log(guests)

    return <div className = "finishedRSVP">
        {guests.map((guest) => {
            return <div className="name">
                <strong>Name: </strong>{guest.first}&nbsp; {guest.last}</div>
                // <div> I add a div, I get red squiggles.  No idea
                // why I can't add a new div which means I can't add any of the
                // other guest info in the array</div>

        })}
    </div>
        {/* <div className="card">
                <div className="selectRSVP">
                <div className="photo" ><img src={guests.thumbnail}></img></div>
                <div className="name"><strong>Name: {guests.first} {guests.last}</strong></div>
                <div className="email"><strong>Email:</strong> {guests.email}</div>
                <div className="phone"><strong>Phone: {guests.phone}</strong></div>
                
            </div>
        </div> */}
       
    
}