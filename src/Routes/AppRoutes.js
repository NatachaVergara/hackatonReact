import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieContainer from '../Components/MovieContainer/MovieContainer'
import Favoritos from '../Views/Favoritos'
import Home from '../Views/Home'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<MovieContainer/>} />
                <Route path='/favoritos' element={<Favoritos />} />
            </Routes>
        </>
    )
}

export default AppRoutes