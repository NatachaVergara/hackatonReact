import React from 'react'
import HomeContainer from '../Components/HomeContainer/HomeContainer'
import NavBar from '../Components/Navbar/NavBar'

const Home = () => {
  return (
    <>
      <NavBar to='/favoritos'
        title='Encuentra tu Película'
        navLink='Favoritos'
        tv='TV'
      />
    <main id='main-home'>
      <section id='contenedor-home'>
        <HomeContainer/>
      </section>
      

    </main>
    </>
  )
}

export default Home