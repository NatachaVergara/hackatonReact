import React from 'react'
import { useMoviesContext } from '../Context/MoviesContextProvider'
const BtnAddCntx = ({movie}) => {


    const { addMovie } = useMoviesContext()
  return (
      <>
          <button className="btn btn-primary bg-danger" onClick={() => addMovie(movie)}  >
              <i className="bi bi-heart"></i>
          </button>

     </>
  )
}

export default BtnAddCntx