import styles from '../App.module.css'

const Card = ({name,pic,handleClick,id}) => {
    return (
        <div className={styles.card} onClick={handleClick}>
            <img src={pic} alt={name} id={id}/>
            <h1 id={id}>{name}</h1>
        </div>
    )
}

export default Card