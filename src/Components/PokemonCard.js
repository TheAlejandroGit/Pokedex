import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {
    const[pokemon,setPokemon]=useState({});

    useEffect(()=>{
        axios.get(pokemonUrl)
        // .then(res=>console.log(res.data));
        .then(res=>setPokemon(res.data))
        
    },[pokemonUrl])
   

    return (
        <Link to={`/pokedex/${pokemon.id}`}>
            <li>
            
            <h2>{pokemon.name?.toUpperCase()}</h2>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <p><b>Type: </b> {pokemon.types?.[0].type.name}</p>
            <p><b>Hp: </b>{pokemon.stats?.[0].base_stat}</p>
            <p><b>Attack: </b>{pokemon.stats?.[1].base_stat}</p>
            <p><b>Defense: </b>{pokemon.stats?.[2].base_stat}</p>
            <p><b>Speed: </b>{pokemon.stats?.[5].base_stat}</p>           
            </li>
        </Link>
       
    );
};

export default PokemonCard;