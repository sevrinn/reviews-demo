import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  //state is set to 0 initially, representing the index of our people array
  const [index, setIndex] = useState(0)
  //destructure people of a certain index
  const { name, job, image, text } = people[index]

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
    </article>
  )
}

export default Review
