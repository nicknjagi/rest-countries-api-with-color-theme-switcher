import React, { useEffect, useRef, useState} from 'react'
import useFetch from '../../utilities/useFetch'
import './home.css'
import Cards from '../../components/cards'

const url =
  'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital'

const index = () => {
  const [showRegion, setShowRegion] = useState(false)
  const { isLoading, isError, data, countries, setCountries} = useFetch(url)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [index, setIndex] = useState(0)

  const regions = ['worldwide','Asia', 'Oceania', 'Europe', 'Americas', 'Antarctic', 'Africa'].sort()

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleChange
  }
  // handle input
  const handleChange= (e) => {
    if(query == '') setCountries(data)
    setQuery(e.currentTarget.value)
    const newData = [...data]
    const newCountries = newData.filter((country)=> country.name.common.toLowerCase().includes(query.toLowerCase())) 
    setCountries(newCountries)
  }

  const filterRegion = (region) => {
    if(region === 'Worldwide') {
      setCountries(data)
      return
    }
    const newData = [...data]
    const filteredData = newData.filter((country) => country.region === region)
    setCountries(filteredData)
    setCurrentPage(1)
  }

  const filterBtns = document.querySelectorAll('.filter-btn')
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      setIndex(0)
      removeActive()
      e.currentTarget.classList.add('active')
    })
  })

  function removeActive () {
    filterBtns.forEach((btn) => {
      btn.classList.remove('active')
    })
  }

  return (
    <div className="home-container">
      <div className="search-filter-container">
        <form onSubmit={handleSubmit}>
          <button
            className="search-btn"
            type="button"
            onClick={handleChange}
            aria-label="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
          </button>
          <input
            type="search"
            id="search"
            placeholder="Search for a country..."
            onChange={handleChange}
            value={query}
          />
        </form>
        <div
          className={
            showRegion
              ? 'region-container overflow-visible'
              : 'region-container overflow-hidden'
          }>
          <button
            className="region-toggle-btn"
            onClick={() => setShowRegion(!showRegion)}>
            Filter by Region {showRegion ?<ion-icon name="chevron-up-outline"></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>}
          </button>
          <div className="regions">
            {regions.map((region) => {
              return (
                <button
                  className={
                    region === 'worldwide'
                      ? 'filter-btn active'
                      : 'filter-btn'
                  }
                  key={region}
                  onClick={() => filterRegion(capitalize(region))}>
                  {region}
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <Cards
        isError={isError}
        isLoading={isLoading}
        countries={countries}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        index={index}
        setIndex={setIndex}
      />
    </div>
  )
}
export default index;
