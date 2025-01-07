import React, { useEffect, useState } from 'react'
import "./index.css";
import {PokimonCards} from './PokimonCards'


function Pokimon() {
    const [pokimon , setPokimon] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const API = "https://pokeapi.co/api/v2/pokemon?limit=600";
    
    const fetchPoki=async()=>{
        try {
            const response = await fetch(API);
            const data = await response.json();
            // console.log(data);
            const pokimonList = data.results.map(async(pokidata)=>{
                const response= await fetch(pokidata.url);
                const data = response.json();
                // console.log(data);
                return data;
                
            });
            // console.log(pokimonList);
            const detail =  await Promise.all(pokimonList);
            console.log(detail);
            setPokimon(detail);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }
    
    useEffect(()=>{
        fetchPoki();
    },[]);
    // search using id & name
    const filterPokimon = pokimon.filter((pokemon)=>pokemon.name.toLowerCase().includes(search.toLowerCase()) 
        ||  pokemon.id.toString() === search);
    if(loading){
        return (<div>
            <h1>Loading...</h1>
            <h1>Wait 5 sec</h1>
        </div>

            
        )
    }
    if(error){
        return <h1>Error: {error.message}</h1>
    }

  return (
    <>
    <section>
        <header>
            <h1>Pokemon List</h1>
        </header>
        <div className='pokemon-search'>
            <input type="text" placeholder='Search Pokemon' value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
        <div>
            <ul className='cards'>
                {
                    filterPokimon.map((poki)=>{
                        return (
                            <PokimonCards key={poki.id} pokidata={poki} />
                        )
                    })
                }
            </ul>
        </div> 
    </section>
    </>
  )
}

export default Pokimon