import axios from 'axios'

const getApi = (setMovies, id) => {
    let urlId = `https://api.themoviedb.org/3/movie/${id}?api_key=4686eb3ce1823957b16c599e25b0189e`;

    let url = `https://api.themoviedb.org/3/movie/popular?api_key=4686eb3ce1823957b16c599e25b0189e`;

   

    if (id) {
        axios.get(urlId)
            .then(res => setMovies(res.data))
            .catch(err => alert(err.message))
            
    } else {
          axios.get(url)
        .then(res => setMovies(res.data.results))
        .catch(err => alert(err.message))
    }
}


export default getApi
