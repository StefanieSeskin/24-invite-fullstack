import { FaCheck } from 'react-icons/fa';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
//   wasInvited,
  //getIsGoing,
  addToNotGoing,
  addToGoing,
  incrementAsync
} from './inviteSlice';

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
        // dispatch(addToGoing(guest))
        dispatch(incrementAsync(guest))
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

    return (
        <div className="selectRSVP">
            <div className="photo">{guest.email}</div>
        <button className="notgoing" onClick={notGoing}>X</button>
        <button className="going" onClick={addGoing}><FaCheck /></button></div>
    )
}

//something about asynchronous code.  Need to get name.first and name.last, photo,
//etc
// but they don't exist..  This is as far as I can get