import React from 'react';
import Arrow from '../images/arrow.png';
const Poem = ({ poems, handleClickShowPoem }) => {
 const poemsList = poems.reverse().map(poem => {
  return(
  <div className="poem" key = {poem.id}>
      <p className="poem-title" onClick = {handleClickShowPoem}>Rozwiń <img src={Arrow} alt="" className = 'arrow-down'/></p>
  <p className="poem-lyrics">{poem.lyrics}</p>
  </div>
  )
})
return (
 <>
 {poemsList}
 </>
)
}

export default Poem;

