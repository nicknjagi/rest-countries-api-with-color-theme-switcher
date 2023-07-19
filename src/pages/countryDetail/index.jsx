import { Link, useParams } from 'react-router-dom'
import './countryDetail.css'
import useFetch from '../../utilities/useFetch'
import CountryDetailSkeleton from './CountryDetailSkeleton'

const index = () => {
  const countryName = useParams()
  const { isLoading, isError, data } = useFetch(
    `https://restcountries.com/v3.1/all?fields=flags,currencies,name,subregion,tld,capital,region,population,borders,languages,cca3`
  )
  
  if (isLoading) {
    return (
      <CountryDetailSkeleton /> 
    )
  }
  if (isError) {
    return 'Something went wrong :('
  }

  const countryData = data.filter((country)=> country.name.common === countryName.name )

  const {flags,currencies,name,subregion,tld,capital,region,population,borders,languages } = countryData[0]

  const getCountryName = (abbr) => {
    const borderCountry = data.filter((country) => country.cca3 === abbr)
    return borderCountry[0].name.common
  }

  return (
    <div className="country-detail-container">
      <div className="flag">
        <img src={flags.png} alt={flags.alt} />
      </div>
      <div className="details">
        <h3>{name.official}</h3>
        <div className="lists-container">
          <ul>
            <li>
              <span className="label">Native Name: </span>
              {name.nativeName?.[`${Object.keys(name.nativeName)[0]}`]?.common}
            </li>
            <li>
              <span className="label">Population: </span>
              {population.toLocaleString()}
            </li>
            <li>
              <span className="label">Region: </span> {region}
            </li>
            <li>
              <span className="label">Sub Region: </span>
              {subregion || 'NA'}
            </li>
            <li>
              <span className="label">Capital: </span> {capital[0] || 'NA'}
            </li>
          </ul>
          <ul>
            <li>
              <span className="label">Top Level Domain: </span> {tld[0]}
            </li>
            <li>
              <span className="label">Currencies: </span>{' '}
              {currencies?.[`${Object.keys(currencies)[0]}`]?.name || 'NA'}
            </li>
            <li>
              <span className="label">Languages: </span>
              {Object.values(languages).join(', ') || 'NA'}
            </li>
          </ul>
        </div>
        <div className="border-countries">
          <h4>Border Countries:</h4>
          <div className="border-countries-container">
            {borders.length >= 1
              ? borders?.map((border, index) => {
                  return (
                    <Link
                      key={index}
                      className="border-link"
                      to={`/${getCountryName(border)}`}>
                      {getCountryName(border)}
                    </Link>
                  )
                })
              : 'NA'}
          </div>
        </div>
      </div>
    </div>
  )
}
export default index