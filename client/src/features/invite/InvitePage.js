import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../counter/Counter'
import {
add, 
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
    useEffect(() => {
        axios.get('/test')
        .then(resp => {
            setGuest(resp.data)
            // console.log(guest)
        })
    }, [])

    // function addGoing() {
    //     dispatch(addToGoing(guest))
    //     dispatch(incrementAsync(guest))
    //     axios.get('/test')
    //     .then(resp => {
    //         setGuest(resp.data)
    //     })
    //     axios.post('/mark-invitee')
    // }

    function getNewGuest() {
       
        axios.get('/test')
        .then(resp => {
            setGuest(resp.data)
        })
    }
    // function
    //  addGoingGuest(){
    //     dispatch(increment())
    // }

    // function addNotGoingGuest(){
    //     dispatch(increment())
    // }

    return (
        <div className="card">
            <div className="counters"><Counter /></div>
                <div className="selectRSVP">
                <div className="photo" ><img src={guest.thumbnail}></img></div>
                <div className="name"><strong>Name: {guest.first} {guest.last}</strong></div>
                <div className="email"><strong>Email:</strong> {guest.email}</div>
                <div className="phone"><strong>Phone: {guest.phone}</strong></div>
                <div className="buttons">
                {/* <button className="notgoing" onClick={() => { notGoing(); addNotGoingGuest();}}><FaTimes /></button>
                <button className="going" onClick={() => { addGoing(); addGoingGuest();}}><FaCheck /></button> */}
                <button className="notgoing" onClick={() => { dispatch(add({...guest, isGoing: false})); getNewGuest()}}><FaTimes /></button>
                <button className="going" onClick={() => {}}><FaCheck /></button>
            </div>
            </div>
        </div>
    )
}

