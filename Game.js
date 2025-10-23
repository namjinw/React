import { use, useState } from "react"

export function Square({value, onSquareClick}) {

    return (
        <>
            <button className="square" onClick={onSquareClick}>{value}</button>
        </>
    )
}

export default function Borad() {

    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handClick(i) {
        const nextSquares = squares.slice();

        if(squares[i] || claculateWinner(squares)) {
            return;
        }
        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    const winner = claculateWinner(squares);

    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={ () => handClick(0)}></Square>
                <Square value={squares[1]} onSquareClick={ () => handClick(1)}></Square>
                <Square value={squares[2]} onSquareClick={ () => handClick(2)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={ () => handClick(3)}></Square>
                <Square value={squares[4]} onSquareClick={ () => handClick(4)}></Square>
                <Square value={squares[5]} onSquareClick={ () => handClick(5)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={ () => handClick(6)}></Square>
                <Square value={squares[7]} onSquareClick={ () => handClick(7)}></Square>
                <Square value={squares[8]} onSquareClick={ () => handClick(8)}></Square>
            </div>
        </>
    )
}

function claculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}