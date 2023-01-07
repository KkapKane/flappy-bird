

export default function Menu ({ startGame, changeSetting, changeCredit }) {

    return (
        <div id="menu">
            <h1>Flappy Bird</h1>
            <button onClick={()=> startGame()}>Start New Game</button>
            <button onClick={changeSetting}>Settings</button>
            <button onClick={changeCredit}>Credits</button>
        </div>
    )
}