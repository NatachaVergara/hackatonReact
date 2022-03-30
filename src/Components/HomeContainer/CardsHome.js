import React from 'react'
import { Link } from 'react-router-dom'
// import { useMoviesContext } from '../../Context/MoviesContextProvider'
import BtnAddCntx from '../BtnAddCntx'



const CardsHome = ({ id, title, movie, img }) => {
   


    return (
        <div className="card col-4 m-2" id={id} style={{ width: "15rem" }}>
            <img src={`https://image.tmdb.org/t/p/w200/${img}`} className="card-img-top p-1" alt={title} />           
            <BtnAddCntx movie={movie}/>
            <div className="card-body">
                <h5 className="card-title p-3">{title} </h5>
                <Link className="btn btn-danger card-date" to={`/${id}`} >Ver mas.. </Link>               
            </div>          
        </div>
    )
}

export default CardsHome