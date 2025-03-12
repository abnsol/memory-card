// import { useState } from "react"
import styles from '../App.module.css'

const GameBoard = ({clickedCards,highScore}) => {
    // const [gameScore,setGameScore] = useState(0); 
    // const [highScore,setHighScore] = useState(0); 
    console.log(highScore ? highScore : 0)


    return (
        <div className={styles.gameBoard}>
            <div>Game Score: {clickedCards.current.size}</div>
            <div>High Score: {highScore}</div>
        </div>
    )
}

export default GameBoard