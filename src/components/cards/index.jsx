import { useEffect, useState } from 'react'
import Card from './../card'
import './cards.css'
import Pagination from '../pagination/Pagination'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './CardSkeleton'


const Cards = ({isLoading,isError,countries,currentPage,setCurrentPage}) => {
  const [postsPerPage, setPostsPerPage] = useState(12)
  
  if(isLoading){
    return (
      <div className='cards-container'>
        {Array(postsPerPage).fill(0).map((item,i)=> {
          return (
            <div key={i}>
              <CardSkeleton />
            </div>
          )
        })}
      </div>
    )
  }
  if(isError){
    return 'Something went wrong :('
  }

  const lastPosIndex = currentPage * postsPerPage
  const firstPostIndex = lastPosIndex - postsPerPage
  const currentPosts = countries.sort((a,b)=> a.name.common - b.name.common).slice(firstPostIndex,lastPosIndex)
  // console.log(countries.sort())
  return (
    <>
      <div className='cards-container'>
        {currentPosts.map((country)=> {
          return <Card key={country.name.common} country={country} />
        })}
      </div>
      <Pagination totalPosts={countries.length} currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}
export default Cards