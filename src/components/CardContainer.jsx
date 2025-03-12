import Card from "./Card"
import styles from '../App.module.css'

// const clickedCards = new Set();

// accept collections of pokemon info in array
// pokemons = [] including obj with their id,name,img
const CardContainer = ({pokemonData, setPokemonData, setPlayStatus, clickedCards, highScore}) => {
    const slicedPokemonData = pokemonData.slice(0,8);
    console.log("poke",pokemonData)
    console.log("sliced",slicedPokemonData)

    // Create a copy of the array otherwise it doesn't rerender
  function shuffleArray(array) {
    const newArray = [...array]; 
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  function handleClick(e) {
    const clickedId = e.target.id;
    console.log(clickedId)
    // if e.val in the pokemon set it was clicked so game over
    if (clickedCards.has(clickedId)){
        localStorage.setItem("highScore",Math.max(highScore,clickedCards.size)) 
        setPlayStatus(false)
        clickedCards.clear();
    }else{
        // else we rerender
        clickedCards.add(clickedId); 
        const shuffledData = shuffleArray(pokemonData);
        setPokemonData(shuffledData); 
    }
  }

    return (
        <div className={styles.cardContainer}>
            {slicedPokemonData.map((pokemon) => (
                <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} pic={pokemon.pic} handleClick={handleClick}/> 
            ))}
        </div>
    )
}

export default CardContainer