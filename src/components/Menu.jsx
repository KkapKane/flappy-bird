

export default function Menu ({startGame}) {

    return (
        <div id="menu">
            <h1>Flappy Bird</h1>
            <button onClick={()=> startGame()}>Start New Game</button>
            <button>Settings</button>
            <button>Credits</button>
        </div>
    )
}