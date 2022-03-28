import axios from 'axios'

const getApi = ({ setMovies }) => {

    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4686eb3ce1823957b16c599e25b0189e')
        .then(res => setMovies(res.data.results))
        .catch(err => alert(err.message))

}

export default getApi