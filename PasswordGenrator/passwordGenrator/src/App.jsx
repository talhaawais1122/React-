import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");

  function GenPassword() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let availableCharacters = alphabets;

    if (num) {
      availableCharacters += numbers;
    }

    if (char) {
      availableCharacters += specialChar;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
    
      const randomIndex = Math.floor(Math.random() * availableCharacters.length);
      console.log (Math.floor(Math.random()*availableCharacters.length))
      newPassword += availableCharacters[randomIndex];
    }
    return newPassword;
  }

  function GenratePassword(){
    setPassword(GenPassword());
  }

  function CopyToClipboard() {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }






  return (
    <>
    <h1 id='heading' > Password Genrator  </h1>
    <div id='inputstyle'>
    <input id='inputText' type="text" placeholder='Password' readOnly value={password} />
    <button id="copybtn" onClick={CopyToClipboard}> Copy </button>
    </div>

    <div id='checkBox' className="row">
      <div className="col-sm-6">
        <label>Include numbers</label>
        <input 
        type="checkbox" 
        id="num"
         onChange={() => setNum(!num)} />
      </div>
      <div className="col-sm-6">
        <label>Include Character </label>
        <input 
        type="checkbox" 
        id="char"
        
         onChange={() => setChar(!char)} />
      </div>
      <div className="col-sm-6">
        <label>Password Length </label>
        <input 
        type="number" 
        id="length" 
        placeholder='Length'
        min="6"
        max="30"
        onChange={(e) => setLength(e.target.value)} />
      </div>
     
    </div>
    <div id= "GennPass">
        <button   onClick={GenratePassword}>Generate Password</button>
      </div>
    
   



    </>
  );
}

export default App;


