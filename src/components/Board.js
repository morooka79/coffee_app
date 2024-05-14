import board from '../images/board.png'
import React from 'react';

import './components.css'

const Board = (props) => {
    return (
      <div className='image-container'>
        <img src={board} classnmae='image' alt='画像' style={{ width: '80%', height:'80%'}}></img>
        <ul className='text-overlay'>
          {props.drinkers.map(item => (
            <li key={item}>{item}</li>
          ))
          }
        </ul>
      </div>
    );
}

export default Board;