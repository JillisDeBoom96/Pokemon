import React, {useState, useEffect} from "react";
import axios from "axios";



function PokemonCard({nameOfPokemon}){
    const [pokemon, setPokemon] = useState(null);
    // console.log("Who is that pokemon:", pokemon);

    useEffect(() => {
        console.log("FETCHING")

        async function fetchPokemon() {
            const results = await axios.get
            (`https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`
            );
            setPokemon(results.data);
            // console.log(pokemon)
        }

        fetchPokemon();
    }, [nameOfPokemon]);



    return(
        <div className="main-container">
            {pokemon ? (
                <div className="card-container">
                    <h1 className="poke-name">{pokemon.name}</h1>
                    <img className="picture" src={pokemon.sprites.front_shiny} alt="" />
                    <p><b>Moves:</b>{pokemon.moves.length}</p>
                        <p><b>Weight:</b>{pokemon.weight}
                        </p>
                    <p><b>Abilities:</b></p>
                    <div className="abilities" >{pokemon.abilities.map(ability => {
                        // console.log(ability) // {ability: {name : "Stomp" }}
                        return <p className="ability">{ability.ability.name}</p>
                    })}</div>
                </div>
                ) : (<h3>Loading</h3>)}

        </div>
    )
}
export default PokemonCard;