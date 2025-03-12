import CardContainer from "./components/CardContainer"
import { useEffect } from "react"
import { useState, useRef } from "react";
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import styles from './App.module.css'




function App() {
  let [pokemonData,setPokemonData] = useState([]);
  let [playStatus,setPlayStatus] = useState(true);
  const clickedCards = useRef(new Set());
  let highScore = localStorage.getItem("highScore")
  highScore = isNaN(highScore) ? 0 : highScore
  // console.log(isNaN(highScore))
  // console.log("highScore",highScore)

  useEffect(() => {
    (async() => {
      // fetch the pokemon 
      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
                .then((response) => response.json())
                .then((data) => data.results)
      
      // filter the url
      const pokemon_url = await pokemon.map((poke) => poke.url);

      // // fetch each pokemon using the url and promise all
      const promisedPokemonList = await pokemon_url.map((url) => 
        fetch(url).then((response) => response.json())
      )
      const pokemonList = await Promise.all(promisedPokemonList)

      // filter the name the id the pic
      const pokemons = pokemonList.map((pokemon) => {
        return {
          name: pokemon.name,
          pic: pokemon.sprites.front_default,
          id: pokemon.id
        }
      })
      setPokemonData(pokemons)
    })();
  },[])

  return (
    playStatus ? (
      <div className={styles.app}>
        <GameBoard clickedCards={clickedCards} highScore={highScore}/>
        <CardContainer pokemonData={pokemonData} setPokemonData={setPokemonData} setPlayStatus={setPlayStatus} clickedCards={clickedCards.current} highScore={highScore}/> 
      </div>
    )
      : <GameOver setPlayStatus={setPlayStatus}/>
  )
}

export default App
