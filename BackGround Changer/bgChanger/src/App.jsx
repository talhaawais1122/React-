import { useState } from 'react';
import './App.css';

function App() {
  let [color, setColor] = useState("green");

  return (
    <>
      <div className='w-screen h-screen '  style={{ backgroundColor: color }}>

        <div className=' flex justify-center items-center bottom-14 bg-stone-400'>
          <button className='bg-red-500 ml-5' onClick={() => setColor("red")}>Red</button>
        
          <button  className='bg-blue-500 ml-9' onClick={() => setColor("blue")}>Blue</button>
          <button   className='bg-green-400 ml-9' onClick={() => setColor("green")}>Green</button>
        </div>

        </div>
   
    </>
  );
}

export default App;
