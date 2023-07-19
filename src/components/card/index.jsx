import {Link} from 'react-router-dom'
import './card.css'


const index = ({country}) => {
  const {name,flags,population,region,capital} = country
  return (
    <Link to={name.common}>
      <div className='card'>
        <div>
          <img src={flags.svg} loading="lazy" alt={`The flag of ${name.common}`} />
        </div>
        <div>
          <h3>{name.official}</h3>
          <p><span>Population:</span> {population.toLocaleString()}</p>
          <p><span>Region:</span> {region}</p>
          <p><span>capital:</span> {capital || 'NA'}</p>
        </div>
      </div>
    </Link>
  )
}
export default index