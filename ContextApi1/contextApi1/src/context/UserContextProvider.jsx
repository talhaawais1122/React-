import React, { useState } from "react";
import UserContext from "./userContext";

function UserContextProvider({ children }) {

  const [data, setData] = useState("");
  let handleUserName  = (userName)=>{
    setData(userName);
  }

  const [userPassword, setUserPassword] = useState("");
  let handlePassword = (password) => {
    setUserPassword(password);
  }
 


  return (
    <UserContext.Provider value={{ handleUserName,data, handlePassword,userPassword}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
