import React, { useEffect } from 'react'
import axios from 'axios'

export default function InvitePage() {
    // refactor to use slice
    useEffect(() => {
        //move to inviteSlice
        axios.get('/test')
        .then(resp => {
            console.log(resp.data)
        })
    }, [])
    return (
        <div>invite</div>
    )
}