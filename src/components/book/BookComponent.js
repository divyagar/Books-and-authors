import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const BookComponent = () => {
	return (
		<div>
			<div className="flex flex-col py-20 justify-center items-center" >
				<div>
					<button
						className="border border-black px-14 py-3 mb-5 focus:outline-none"
					>
						<Link to="/createBook">
							Create a book
						</Link>
					</button>
				</div>

				<div>
					<button
						className="border border-black px-14 py-3 mb-5 focus:outline-none"
					>
						<Link to="/books">
							List all books
						</Link>
					</button>
				</div>

			</div>
		</div>
	)
}
