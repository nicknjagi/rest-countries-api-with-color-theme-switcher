import Skeleton from 'react-loading-skeleton'
import './countryDetail.css'

const CountryDetailSkeleton = () => {
  return (
    <div className="country-detail-container">
      <div className="flag">
        <Skeleton height={200} />
      </div>
      <div className="details">
        <Skeleton width={'70%'} />
        <div className="lists-container">
          <ul>
            <Skeleton width={'60%'} count={5} />
          </ul>
          <ul>
            <Skeleton width={'60%'} count={3} />
          </ul>
        </div>
        
          <Skeleton width={'60%'} />
          <Skeleton width={'40%'} />
      </div>
    </div>
  )
}
export default CountryDetailSkeleton