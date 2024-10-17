import { useState } from 'react';
import './App.css';

import Cards from './Component/Cards';

function App() {
  const [rcolor, setColor] = useState('#ffffff'); // Default color

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <>
      <h1
        className="text-9xl font-bold underline"
        style={{ backgroundColor: rcolor }}
      >
        TAlha
      </h1>
      <button onClick={handleClick}>Change Color</button>


      < Cards style={{ backgroundColor: rcolor }} userName='Vha '  srcPath='https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g' />


    </>
  );
}

export default App;
