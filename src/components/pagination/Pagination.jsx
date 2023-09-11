import React from "react"
import './pagination.css'

const Pagination = ({totalPosts, postsPerPage,setCurrentPage, currentPage,index,setIndex}) => {
  let pages = []
  let groupPages = []
  let pagesArr = []
  
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i)
  }

  for (let i = 0; i < pages.length; i++){
    if( i !== 0 && i%5 === 0){
      groupPages.push(pagesArr)
      pagesArr = []
    }
    pagesArr.push(pages[i])
  }
  groupPages.push(pagesArr)

  function getIndex(btn) {
    if(btn === 'prev') {
      if(index > 0){
        setIndex(cur => cur - 1)
        setCurrentPage(cur => cur = groupPages[index-1][0])
      }
    }
    if(btn === 'next') {
      if(index < groupPages.length -1){
        setIndex(cur => cur +1)
        setCurrentPage(groupPages[index+1][0])
      }
    }
  }

  return (
    <section className="pages-container">
      <button className="group-btn" aria-label="previous pages" onClick={() => getIndex('prev')}>
        <ion-icon name="caret-back-outline"></ion-icon>
      </button>
      {groupPages[index].map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page ? 'activePage page-btn' : 'page-btn'
            }>
            {page}
          </button>
        )
      })}
      {index === groupPages.length - 1 ? '' : <p>...</p>}
      <button className="group-btn" aria-label="next pages" onClick={() => getIndex('next')}>
        <ion-icon name="caret-forward-outline"></ion-icon>
      </button>
    </section>
  )
}
export default Pagination