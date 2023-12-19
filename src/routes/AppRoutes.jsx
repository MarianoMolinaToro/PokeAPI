import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../views/Home'
import Pokemons from '../views/Pokemons'

import NotFound from '../views/NotFound'
import PokemonDetails from '../views/PokemonDetails'


const AppRoutes = () => {
  return (
    <>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokemons" element={<Pokemons/>} />
          <Route path="/pokemons/:name" element={<PokemonDetails/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </>
  )
}

export default AppRoutes