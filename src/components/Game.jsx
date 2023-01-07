import Bird from './Bird';

export default function Game ({ yPos, setYPos, changeMenu }) {

    return (
        <div id="game">
            <Bird yPos={yPos} setYPos={setYPos} />
            <button onClick={changeMenu}>Back</button>
        </div>
    )
}