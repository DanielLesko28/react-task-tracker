import React from 'react'
import './Tag.css'

const Tag = ({setState, name}) => {
    const handleTagClick = (selectedTag) => {
        setState(selectedTag);
      };
  return (
    <div>
         <button className='tag' onClick={() => handleTagClick(name)}>{name}</button>
    </div>
  )
}

export default Tag