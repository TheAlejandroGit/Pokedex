import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PokedexInfo = () => {
    const {id}=useParams();
    const [pokemon, setPokemon]=useState({});

    useEffect(()=>{

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>setPokemon(res.data))
        // .then(res=>console.log(res.data))

    },[id]);

    return (
        <div className='pk-info'>
            <h1>{pokemon.name?.toUpperCase()}</h1>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <p><b>#{pokemon.id}</b></p>
            <p><b>Base experience: </b> {pokemon.base_experience}</p>
            <p><b>weight: </b> {pokemon.weight} hectograms</p>
            <p> <b>Height: </b> {pokemon.height} decimeters</p>          
           <Link to={"/pokedex"} > <button><i className="fa-solid fa-arrow-rotate-left"></i></button></Link>
        </div>
    );
};

export default PokedexInfo;