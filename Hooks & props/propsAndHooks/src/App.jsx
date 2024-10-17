import { useState } from 'react';
import './App.css';

function App() {
 let [value,setValue]= useState(0);

  const addOne = () => {
    setValue(value + 1);
  };  
  const subtractOne = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };


  return (
    <>
      <h1 className='bg-blue'>Hallo</h1>
      <button onClick={addOne} > addOne </button>
      <button onClick={subtractOne} disabled={value === 0}> subtractOne </button>
    </>
  )
}

export default App
