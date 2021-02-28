import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../counter/Counter'
import {
  addToNotGoing,
  addToGoing,
  incrementAsync
} from './inviteSlice';

import {
    increment,
  } from '../counter/counterSlice';

export default function InvitePage() {
    const invited = useSelector((state) => {
        return state.going
    })
    const dispatch = useDispatch();
    const [guest, setGuest] = useState({});
    // refactor to use slice
    useEffect(() => {
        //moved to inviteSlice
        axios.get('/test')
        .then(resp => {
            setGuest(resp.data)
        })
    }, [])

    function addGoing() {
        dispatch(addToGoing(guest))
        // dispatch(incrementAsync(guest))
        axios.get('/test')
        .then(resp => {
            setGuest(resp.data)
        })
    }
    function notGoing() {
        dispatch(addToNotGoing(guest))
        axios.get('/test')
        .then(resp => {
            setGuest(resp.data)
        })
    }
    function addGoingGuest(){
        dispatch(increment())
    }

    function addNotGoingGuest(){
        dispatch(increment())
    }

    return (
        <div className="card">
            <div className="counters"><Counter /></div>
            <div className="selectRSVP">
            <div className="photo">PHOTO</div>
            <div className="name"><strong>Name:</strong></div>
            <div className="email"><strong>Email:</strong> {guest.email}</div>
            <div className="phone"><strong>Phone:</strong></div>
            <div className="buttons">
            <button className="notgoing" onClick={() => { notGoing(); addNotGoingGuest();}}><FaTimes /></button>
            <button className="going" onClick={() => { addGoing(); addGoingGuest();}}><FaCheck /></button>
            </div>
            </div>
        </div>
    )
}

