
import Menu from './components/Menu';
import './styles/style.scss';
import { useRef, useState } from 'react';
import Game from './components/Game';
import Settings from './components/Settings';
import Credits from './components/Credits';

export default function App() {

  // sets displays //
  const [menuPage, setMenuPage] = useState(true);
  const [gamePage, setGamePage] = useState(false);
  const [settingPage, setSettingPage] = useState(false);
  const [creditPage, setCreditPage] = useState(false);

  // functions to toggle display //
  const changeMenu = () => {
    setMenuPage(!menuPage);
    setGamePage(false);
    clearInterval(interval.current)
  }

  const changeSetting = () => {
    setMenuPage(!menuPage);
    setSettingPage(!settingPage);
  }

  const changeCredit = () => {
    setMenuPage(!menuPage);
    setCreditPage(!creditPage);
  }

  const [yPos, setYPos] = useState(0);

  let interval = useRef();

  function startGame() {
    setYPos(0);
    // closes menu page & opens game page //
    setMenuPage(false);
    setGamePage(true);

    //starts counter that moves the Ypos every 1000ms / 60ms = 16.66 milliseconds which should be 60fps.
    interval.current = setInterval(() => {
      setYPos((prev) => prev + 0.5);
    }, 1000 / 60);

    //clean up setInterval
    return () => clearInterval(interval.current);
  }

  return (
    <div id="content">
      {menuPage ? 
        <Menu startGame={startGame} 
          changeSetting={changeSetting}
          changeCredit={changeCredit} /> : null}
      
      {gamePage ? 
        <Game yPos={yPos} 
          setYPos={setYPos}
          changeMenu={changeMenu} /> : null }

      {settingPage ? <Settings changeSetting={changeSetting} /> : null}

      {creditPage ? <Credits changeCredit={changeCredit} /> : null}
    </div>
  )
}

