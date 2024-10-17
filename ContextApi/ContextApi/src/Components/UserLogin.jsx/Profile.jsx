import React from 'react'
import userContext from '../../Context/UserContext'
import { useContext } from 'react'
export default function Profile() {
    
    let {data}= useContext(userContext);

    return (
        <>

        
        <h2>Profile</h2>
    <p>Name: {data.name}</p>            
        </>
    )
}
