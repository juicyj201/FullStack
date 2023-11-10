import { useEffect } from 'react'
import { useState } from 'react'
import service from './services/CountryService'

const urlWeatherIcon = "https://openweathermap.org/img/wn"

function App() {
  const [filterCountries, setFilterCountries] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [errorDisplay, setErrorDisplay] = useState(<></>)
  const [weather, setWeather] = useState()
  const [weatherIcon, setWeatherIcon] = useState()

  const value1 = document.getElementById('countryInput')

  useEffect(() => {
      service
        .getAll()
        .then(countryList => {
          setFilterCountries(countryList)
        })
  }, [])

  function showCountryInfo(){
    setNotFound(false)  
    const filteredCountry = filterCountries[0]
    const languageList = Object.values(filteredCountry.languages).map((item, index) => {
      return(<li key={index}>{item}</li>)
    })

    setErrorDisplay(
      <div>
        <h1>{filteredCountry.name.common}</h1>
        <p>
          capital: {filteredCountry.capital}
          <br/>
          area: {filteredCountry.area}
        </p>
        
        <b>languages:</b><br/>
        <ul>
          {languageList}
        </ul>
        <br/>

        <img src={filteredCountry.flags.png} />

        <h2>Weather in {filteredCountry.capital}</h2>
        <p>
          temperature: {weather.main.temp} Celsius
          <img src={weatherIcon}/>
          wind: {weather.wind.speed} m/s
        </p>
      </div>
      )
  }

  const filterByCountry = (event) => {
    event.preventDefault()
    setFilterCountries(filterCountries.filter(country => country.name.common.toLowerCase().includes(value1.value)))

    if(filterCountries.length > 1 && filterCountries.length <= 10)
    {
      setNotFound(true)  
      setFilterCountries(filterCountries.filter(country => country.name.common.toLowerCase().includes(value1.value)))
    } 
    else if(filterCountries.length === 1)
    {
        service
          .getWeather(filterCountries[0].latlng[0], filterCountries[0].latlng[1])
          .then(w => {
            setWeather(w)
            console.log(`${urlWeatherIcon}/${w.weather[0].icon}@2x.png`)
            setWeatherIcon(`${urlWeatherIcon}/${w.weather[0].icon}@2x.png`)
          })

      showCountryInfo()
    }
    else if(filterCountries.length > 10)
    {
      setNotFound(false)
      setErrorDisplay(<div>Too many matches, specify another filter</div>)
    }
  }

  return (
    <>
      <div>
        <div>find countries  
          <input 
            id="countryInput"
            type="text"
            onInput={filterByCountry}/>
        </div>
        <div>
          <ul>
            {
              notFound ? (filterCountries.map((c) => <li className='countryList' key={c.name.common}>{c.name.common} <button type="button" onClick={showCountryInfo}>show</button></li>)) : (errorDisplay)
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
