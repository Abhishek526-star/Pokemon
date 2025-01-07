import React from 'react'

export function PokimonCards({pokidata}) {
    const path = pokidata.sprites.other.dream_world.front_default;
    const name = pokidata.name;
  return (
    <li className='pokemon-card'>
        <figure>
            <img src={path} alt={name}
            className='pokemon-image'/>
        </figure>
            <h1 className='pokemon-name'>{name}</h1>
            <div className='pokemon-info pokemon-highlight'>
                <p>
                    {pokidata.types.map((type)=> type.type.name).join(', ')
                    }
                </p>
            </div>
            <div className='grid-three-cols'>
                <p className='pokemon-info'>
                    <span>Height:</span>{pokidata.height}
                </p>
                <p className='pokemon-info'>
                    <span>weight:</span>{pokidata.weight}
                </p>
                <p className='pokemon-info'>
                    <span>Speed:</span>{pokidata.stats[5].base_stat}
                </p>
            </div>

            <div className='grid-three-cols'>
                <p className='pokemon-info'>
                    <span>Defense:</span>{pokidata.stats[3].base_stat}
                </p>
                <p className='pokemon-info'>
                    <span>Attack:</span>{pokidata.stats[4].base_stat}
                </p>
                <p className='pokemon-info'>
                    <span>HP:</span>{pokidata.stats[0].base_stat}
                </p>
            </div>
            <div className='grid-three-cols'>
                <p className='pokemon-info'>
                <span>Experience:</span>{pokidata.base_experience}
                </p>
                <p className='pokemon-info'>
                <span>ID:</span>{pokidata.id}
                </p>

                <p className='pokemon-info'>
                <span>Order:</span>{pokidata.order}
                </p>
            </div>
    </li>
  )
}

