import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favoritos from '../Views/Favoritos'
import Home from '../Views/Home'
import Movie from '../Views/Movie'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Movie/>} />
                <Route path='/favoritos' element={<Favoritos />} />
            </Routes>
        </>
    )
}

export default AppRoutes