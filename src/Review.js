import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
	//state is set to 0 initially, representing the index of our people array
	const [index, setIndex] = useState(0)
	//destructure people of a certain index
	const { name, job, image, text } = people[index]

	//CHECK NUMBER FUNCTION
	// takes a number as a parameter (in this case the newIndex var)
	// if number is gt the length of the people array - 1, returns 0
	// if number is lt 0, return length of people array - 1,
	// otherwise just return passed in number (newIndex)
	const checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0
		}

		if (number < 0) {
			return people.length - 1
		}
		return number
	}

	//BUTTON EVENT HANDLERS
	// these buttons set the index one forward or own back when clicked
	// we use a callback with current index as an arg.
	// we set var to equal current index plus one
	// it returns the checkNumber helper function with val of newIndex as a param
	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1
			return checkNumber(newIndex)
		})
	}

	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1
			return checkNumber(newIndex)
		})
	}

	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn'>surprise me</button>
		</article>
	)
}

export default Review
