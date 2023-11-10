import axios from 'axios'

const url = 'https://studies.cs.helsinki.fi/restcountries/api'
const urlWeather = "https://api.openweathermap.org/data/2.5"
const key = import.meta.env.VITE_SOME_KEY

const getAll = () => {
    const request = axios.get(`${url}/all`)
    return request.then(response => response.data)
}

const getByName = name => {
    const request = axios.get(`${url}/name/${name}`)
    return request.then(response => response.data)
}

const getWeather = ({lat, lon}) => {
    const request = axios.get(`${urlWeather}/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    return request.then(response => response.data)
}

export default {
    getAll,
    getByName,
    getWeather
}