import styles from '../App.module.css'

const GameOver = ({setPlayStatus}) => {

    const handleClick = () => setPlayStatus(true)

    return (
        <div className={styles.gameOver}>
            <h1>Game Over</h1>
            <button onClick={handleClick}>Play Again</button>
        </div>
    )
}

export default GameOver