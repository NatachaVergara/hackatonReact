import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favoritos from '../Views/Favoritos'
import Home from '../Views/Home'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favoritos' element={<Favoritos />} />
            </Routes>
        </>
    )
}

export default AppRoutes