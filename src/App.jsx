import Bird from './components/Bird';
import Menu from './components/Menu';
import './styles/style.scss';
import {useRef, useState} from 'react';

 export default function App() {

 const [yPos, setYPos] = useState(0);

  let interval = useRef();

 function startGame() {
   //starts counter that moves the Ypos every 1000ms / 60ms = 16.66 milliseconds which should be 60fps.

   interval.current = setInterval(() => {
     setYPos((prev) => prev + 1);
   }, 1000 / 60);

   //clean up setInterval
   return () => clearInterval(interval.current);
 }

  return (
    <div id="content">
      <Menu startGame={startGame}/>
      <Bird yPos={yPos} setYPos={setYPos}/>
    </div>
  )
}

