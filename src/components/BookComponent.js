import React, { useState } from 'react'
import ListBooks from './ListBooks'
import CreateBook from './CreateBook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const BookComponent = () => {
	const [displayBlock, setDisplayBlock] = useState("both");

	return (
		<div>
			<div className="px-10 text-left">
				<
					FontAwesomeIcon
					icon={faArrowLeft}
					className="cursor-pointer"
					size="lg"
					onClick={() => setDisplayBlock("both")}
				/>
			</div>
			<div className={"flex flex-col py-20 justify-center items-center " + (displayBlock == "both" ?
				"h-96" :
				"")
			}>
				<div className={
					displayBlock === "both" || displayBlock === "first" ? "" : "hidden"
				}>
					<button
						className="border border-black px-14 py-3 mb-5 focus:outline-none"
						onClick={() => setDisplayBlock("first")}
					>
						Create a book
          			</button>
				</div>

				<div className={
					"w-full " + (displayBlock === "first" ? "" : "hidden")
				}>
					<CreateBook />
				</div>

				<div className={
					displayBlock === "both" || displayBlock === "second" ? "" : "hidden"
				}>
					<button
						className="border border-black px-14 py-3 mb-5 focus:outline-none"
						onClick={() => setDisplayBlock("second")}
					>
						List all books
          			</button>
				</div>

				<div className={
					displayBlock === "second" ? "" : "hidden"
				}>
					<ListBooks />
				</div>
			</div>
		</div>
	)
}
