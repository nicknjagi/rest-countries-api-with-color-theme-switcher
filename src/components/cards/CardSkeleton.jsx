import Skeleton from "react-loading-skeleton"
import './../card/card.css'
const CardSkeleton = () => {
  return (
    <div className='card'>
        <div>
          <Skeleton  height={144}/>
        </div>
        <div>
          <Skeleton count={4}/>
        </div>
      </div>
  )
}
export default CardSkeleton