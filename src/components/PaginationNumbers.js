import React from 'react';

const PaginationNumbers = ({ postsPerPage, totalPosts, paginate}) => {
 const pageNumber = [];

 for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
  pageNumber.push(i);
 }

 return (
  <div className = 'pagination'>
   {pageNumber.map(page => {
    return(
    <div className = 'page' onClick={() => paginate(page)}>{page}</div>
    )
   })}
  </div>
 );
}

export default PaginationNumbers;
