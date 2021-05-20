import React, { useState } from 'react'
import { Mutation, Query } from 'react-apollo'
import { getAuthors, createBook, getBooks } from './queries'

function CreateBook() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [author, setAuthor] = useState(null);

	const Authors = () => (
		<Query query={getAuthors}>
			{
				({ loading, error, data }) => {
					if (loading) return null
					if (error) return null
					if (data.authors.length > 0)
						setAuthor(data.authors["0"].id)
					return (
						<React.Fragment>
							{
								data.authors.map(
									author => <option key={author.id} value={author.id}>
										{author.name}
									</option>
								)
							}
						</React.Fragment>
					)
				}
			}
		</Query>
	)

	return (
		<div className="px-10 sm:w-1/2 lg:w-1/3 m-auto">
			<Mutation mutation={createBook} refetchQueries={() => {
				return [{
					query: getBooks
				}]
			}}>
				{
					(addBook, { loading, error, data }) => (
						< form className="border-2 border-gray-600 px-10 py-5" onSubmit={e => {
							e.preventDefault()
							addBook({
								variables: {
									name: name,
									price: price,
									author: author
								}
							})
						}}>

							<div>
								<label htmlFor="name" className="block text-left">
									Name
              </label>
								<input
									type="text"
									id="name"
									value={name}
									className="border-blue-600 rounded-2xl outline-none border-2 w-full px-3 py-2"
									onChange={(ev) => setName(ev.target.value)}
								/>
							</div>

							<div>
								<label htmlFor="price" className="block text-left mt-4">
									Price
                  </label>
								<input
									type="number"
									form="price"
									value={price}
									className="border-blue-600 rounded-2xl outline-none border-2 w-full px-3 py-2"
									onChange={(e) => setPrice(e.target.value)}
								/>
							</div>

							<div>
								<label htmlFor="author" className="block text-left mt-4">
									Author
                  </label>
								<select
									htmlFor="author"
									className="border-blue-600 rounded-2xl outline-none border-2 w-full px-3 py-2"
									onChange={(e) => setAuthor(e.target.value)}
								>
									<Authors />
								</select>
							</div>

							<div>
								<button
									type="submit"
									value="create"
									className="bg-blue-600 text-white cursor-pointer mt-8 mb-3 w-full py-3 text-lg rounded-2xl"
								>Create</button>
							</div>

							{loading && <p>Loading...</p>}
							{error && <p>Error</p>}
							{data && <p>Done</p>}

						</form>
					)
				}
			</Mutation >
		</div>
	)
}

export default CreateBook
