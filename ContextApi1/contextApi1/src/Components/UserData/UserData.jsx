import { useContext } from 'react';
import UserContext from '../../context/userContext';

export default function UserData() {
    let { data } = useContext(UserContext);
    let {userPassword}= useContext(UserContext);

    return (
        <>
            <h1>User Name : {data ? data : "No user data"}</h1>
            <h1>User Password: {userPassword? userPassword : "No password"}</h1>
        </>
    );
}
