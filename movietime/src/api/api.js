import axios from "axios"
const BASE_URL = 'https://api.themoviedb.org'
const API_KEY = 'fb03eaa2e9d2f3c58fcac118fc158cb6'

export const GetList = (setState) => {
    axios.get(`${BASE_URL}/3/movie/popular?api_key=${API_KEY}`)
    .then((response)=>{
        console.log(response)
        setState(response.data.results)
    }).catch((error)=>{
        console.log(error)
    })
}

export const GetMovie = (setState,movieId) => {
    axios.get(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`)
    .then((response)=>{
        console.log(response)
        setState(response.data)
    }).catch((error)=>{
        console.log(error)
    })
}

export const getDetail = async(id)=>{
    axios.get(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`)
    .then((response)=>{
        return response
    }).catch((error)=>{
        console.log(error)
    })
}
