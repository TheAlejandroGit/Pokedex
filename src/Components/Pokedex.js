import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';



const Pokedex = () => {
    const userName= useSelector(state=>state.userName);
    const navigate=useNavigate();
    const[pokemons, setPokemons]=useState([]);
    const[pokemonName, setPokemonName]=useState("");
    const [types, setTypes]=useState([]);
   

    //pagination

    const [page, setPage]=useState(1);
    
    const itemsNumbers=12;
    const lastIndex=page*itemsNumbers;
    const firstIndex=lastIndex-itemsNumbers;
    const pokemonsPaginated= pokemons?.slice(firstIndex,lastIndex);
    const totalPages= Math.ceil(pokemons?.length/itemsNumbers);

    const pagesNumbers=[];
    for(let i=1; i<=totalPages;i++){
        pagesNumbers.push(i);
    }

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/ 
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
        .then(res=>setPokemons(res.data.results))
        // .then(res=>console.log(res.data.results));

        axios.get('https://pokeapi.co/api/v2/type')
        // .then(res=>console.log(res.data.results))
        .then(res=>setTypes(res.data.results))
        

    },[])

    const submit=e=>{
        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`)
    }

    const handleType=e=>{
        console.log(e.target.value) //acceder a lo que el usuario selecciono
        axios.get(e.target.value) //url
        .then(res=>setPokemons(res.data.pokemon))

    }
   
   

    return (
        <div className='pokedex'>
            <header>
                <div className='red2'> <div className='img-pdx2'></div></div>
                <div className="black2"></div>
             </header>
             <h1 className='well'><span>Welcome {userName}, </span>here you can search for the name of your favorite pokemon.</h1>

            <div className='search'>
                <div>
                    <form onSubmit={submit}>
                        <input type="text" id='pokemon-name' value={pokemonName} onChange={e=>setPokemonName(e.target.value)} placeholder="Search Pokemon"/>
                        <button className='search-pk'>Search</button>
                    </form>
                </div>

                <div className='select'>
                    <select name="" id="" onChange={handleType}>
                    <option>Type</option>
                       
                        {
                            types.map(type=>(
                                <option key={type.url} value={type.url}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            
            <div className='card'>
                <ul>
                    {
                        pokemonsPaginated.map(pokemon=>(
                            <PokemonCard pokemonUrl= {pokemon.url ? pokemon.url:pokemon.pokemon.url} key={pokemon.url ? pokemon.url:pokemon.pokemon.url}/>
                            
                        ))
                    }
                </ul>

            </div>

            <div className='np-buttons'>
                <button onClick={()=>setPage(page-1)}disabled={page<=1}><i className="fa-solid fa-angle-left"></i></button>
                <span> {page}/{totalPages}</span>
               
                <button onClick={()=>setPage(page+1)} disabled={page>=totalPages} ><i className="fa-solid fa-angle-right"></i></button>
            </div>

            <footer className='f-2'>
                <div className='btn-pages'>
                    {pagesNumbers.map(page=>
                    <button onClick={()=> setPage(page)} key={page}>{page}</button>
                    )}
                </div>
            </footer>

        </div>
    );
}; 

export default Pokedex;