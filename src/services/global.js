import axios from "axios";

export const getTrending = axios.get(process.env.REACT_APP_BASIC_URL+"/trending/movie/day?api_key="+process.env.REACT_APP_API_KEY)

export const getCategory = axios.get(process.env.REACT_APP_BASIC_URL+"/genre/movie/list?api_key="+process.env.REACT_APP_API_KEY)

export const getMoviesCategory = (id)=>{return axios.get(process.env.REACT_APP_BASIC_URL+"/discover/movie?api_key="+process.env.REACT_APP_API_KEY+"&with_genres="+id)}

// https://api.themoviedb.org/3/search/keyword?query=good

export const searchForMovie = (word)=>axios.get(process.env.REACT_APP_BASIC_URL+`/search/movie?query=${word}`,{
    headers:
     {Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWM5OWYzMzllNTIxMTczMTQzZmE3MWFjZDkwOTc5NCIsInN1YiI6IjY1ZDhlY2M0MzUyMGU4MDE4N2Q2MzdlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e31I2u8mIWmPG3uxtaEqCqpfOWcDPHhNLcwmTyCzo3Q` , Accept:  "application/json"} 
})
export const getMovieById = (id)=>axios.get(process.env.REACT_APP_BASIC_URL+`movie/${id}`,{
    headers:
     {Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWM5OWYzMzllNTIxMTczMTQzZmE3MWFjZDkwOTc5NCIsInN1YiI6IjY1ZDhlY2M0MzUyMGU4MDE4N2Q2MzdlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e31I2u8mIWmPG3uxtaEqCqpfOWcDPHhNLcwmTyCzo3Q` , Accept:  "application/json"} 
})