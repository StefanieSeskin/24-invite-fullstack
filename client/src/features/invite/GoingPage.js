
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

export default function GoingPage() {
    const dispatch = useDispatch();
    const [guest, setGuest] = useState({});

    return (
        <div className="card">
                <div className="selectRSVP">
                <div className="photo" ><img src={guest.thumbnail}></img></div>
                <div className="name"><strong>Name: {guest.first} {guest.last}</strong></div>
                <div className="email"><strong>Email:</strong> {guest.email}</div>
                <div className="phone"><strong>Phone: {guest.phone}</strong></div>
                
            </div>
        </div>
    )
}