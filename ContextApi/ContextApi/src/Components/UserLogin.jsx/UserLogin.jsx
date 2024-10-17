import React, { useState, useContext } from 'react';
import userContext from '../../Context/UserContext';

export default function UserLogin() {
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let { setData } = useContext(userContext);

    function handleButton(e) {
        e.preventDefault(); // Corrected the typo here
        setData({ userName, password });
    }

    return (
        <>
            <h1>User Login</h1>
            <input
                type="text"
                placeholder="UserName"
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />

            <input
                type="password" // It's better to use 'password' type for passwords
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />

            <button onClick={handleButton}>Submit</button>
        </>
    );
}
