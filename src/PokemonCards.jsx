import React from 'react';

// Destructure props directly in the function parameter
const PokemonCards = ({ Pokemondata }) => {
    return (
        <li className='pokemon-card'>
            <figure>
                <img src={Pokemondata.sprites.other.dream_world.front_default} alt={Pokemondata.name} className='pokemon-image' />
            </figure>
            <h1 className='pokemon-name'>{Pokemondata.name}</h1>
            <div className='pokemon-info pokemon-highlight'>
                <p>
                    {
                        Pokemondata.types
                            .map(currType => currType.type.name)
                            .join(', ')
                    }
                </p>
            </div>

            <div className='grid-three-cols'>
                <p className='pokemon-info'>
                    <span>Heigth:</span> {Pokemondata.height}
                </p>
                <p className='pokemon-info'>
                    <span>Weight:</span> {Pokemondata.weight}
                </p>
                <p className='pokemon-info'>
                    <span>speed:</span> {Pokemondata.stats[5].base_stat}
                </p>
            </div>

            <div className='grid-three-cols'>
                <div className='pokemon-info'>
                    <p>{Pokemondata.base_experience}</p>
                    <span>Experience:</span>
                </div>
                <div className='pokemon-info'>
                    <p>{Pokemondata.stats[1].base_stat}</p>
                    <span>Attack:</span>
                </div>
                <div className='pokemon-info'>
                    <p>
                        {
                            Pokemondata.abilities
                                .map(abilityInfo => abilityInfo.ability.name)
                                .slice(0, 1)
                                .join(", ")
                        }
                    </p>
                    <span>Abilities:</span>
                </div>

            </div>
        </li>
    );
};

export default PokemonCards;
