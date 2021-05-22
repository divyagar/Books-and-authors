import React, { useState } from 'react'
import { Mutation, Query } from 'react-apollo'
import { getAuthors, createBook, getBooks } from './queries'
import CreateBookComponent from './CreateBookComponent'

function CreateBook() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [author, setAuthor] = useState(null);

	const handleSubmit = (e, createBook) => {
		e.preventDefault()
		createBook({
			variables: {
				name: name,
				price: price,
				author: author
			}
		})
	}

	return (
		<div className="w-full py-20">
			<div className="px-10 sm:w-1/2 lg:w-1/3 m-auto">
				<Mutation mutation={createBook} refetchQueries={() => {
					return [{
						createBook: getBooks
					}]
				}}>
					{
						(createBook, { loading, error, data }) => (
							<CreateBookComponent
								handleSubmit={(e) => handleSubmit(e, createBook)}
								name={name}
								price={price}
								author={author}
								setName={(e) => setName(e.target.value)}
								setPrice={(e) => setPrice(e.target.value)}
								setAuthor={(e) => setAuthor(e.target.value)}
								loading={loading}
								error={error}
								data={data}
							/>

						)
					}
				</Mutation >
			</div>
		</div>
	)
}

export default CreateBook
