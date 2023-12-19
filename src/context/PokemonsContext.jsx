import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PokemonsContext = createContext()

const urlPoke = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150';

const PokemonsProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(''); 

    const getPokemons = async () => {
        try {
            const response = await axios.get(urlPoke)
            if(!response.status){
                throw new Error('Data not found');
            }
            setPokemons(response.data.results)
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
     }
    };

    useEffect(() => {
        getPokemons();
    }, []);

return   (<PokemonsContext.Provider
value={{
    pokemons,
    setPokemons,
    selectedPokemon,
    setSelectedPokemon,
}}> 

{children} </PokemonsContext.Provider>
);   
};

export default PokemonsProvider