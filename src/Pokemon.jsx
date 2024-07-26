import React, { useEffect, useState } from 'react'
import './index.css'
import PokemonCards from './PokemonCards';

const Pokemon = () => {
    const [Pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(null);
    const [search, setSearch] = useState('');

    const API = 'https://pokeapi.co/api/v2/pokemon?limit=24';

    const fetchPokemon = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            // console.log(data);

            const DetailedPokemonData = data.results.map(async (currentPokemon) => {
                //   console.log(currentPokemon.url)
                const response = await fetch(currentPokemon.url);
                const data = await response.json();
                return data;
            })

            const DetailedResponse = await Promise.all(DetailedPokemonData);
            console.log(DetailedResponse);
            setPokemon(DetailedResponse);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
            seterror(error.message);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    // search function
    const searchData = Pokemon.filter(CurrPokemon => CurrPokemon.name.toLowerCase().includes(search.toLowerCase()));

    if (loading) {
        return (
            <div>
                <h1>loading....</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }

    return (
        <>
            <section className='contains'>
                <header>
                    <h1>Hello Pokemon! Once Again</h1>
                </header>
                <div className='pokemon-search'>
                    <input type="text" placeholder='Search Pokemon' value={search}
                     onChange={e => setSearch(e.target.value)} />
                </div>
                <div>
                    <ul className='cards'>
                        {
                            searchData.map((currentPokemon) => {
                                return <PokemonCards keys={currentPokemon.id} Pokemondata={currentPokemon} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Pokemon
