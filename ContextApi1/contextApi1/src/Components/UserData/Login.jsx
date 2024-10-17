import{ useState,useContext } from 'react';
import UserContext from '../../context/userContext';


function Login() {

    let [userName,setUserName] = useState("");
    let [password,setPassword] = useState("");

    let {handleUserName}= useContext(UserContext);
    let {handlePassword}= useContext(UserContext);

    const handleButton = () => {
        handleUserName(userName);
        handlePassword(password);
    }
    console.log("handleButton")

    return (
        <>
            <h1>Login</h1>
            
            <input type="text" placeholder='User Name' value={userName} 
            onChange={(e)=>{
                setUserName(e.target.value);
            }}
            />


            <input type="password" placeholder='Password' value={password} 
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />


            <button onClick={handleButton}>Submit</button>
        </>
    )
}
export default Login;