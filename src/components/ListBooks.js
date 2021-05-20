import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { getBooks, deleteBook } from './queries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function ListBooks() {
	return (
		<div>
			<Query query={getBooks}>
				{
					({ loading, error, data }) => {
						console.log(loading, error, data)
						if (loading) return <p>Loading...</p>
						if (error) return <p>Error while fetching data</p>
						return (
							<React.Fragment>
								{
									data.books.length > 0 &&
									data.books.map(book =>
										<div key={book.id} className="border-t-2 border-b-2 px-10 py-5 text-left">
											<div>
												<Mutation mutation={deleteBook} refetchQueries={() => {
													return [{
														query: getBooks
													}]
												}}>
													{
														(deleteBook, { loading, error, data }) => (
															<FontAwesomeIcon
																icon={faTrashAlt}
																className="cursor-pointer"
																color="red"
																onClick={e => {
																	e.preventDefault()
																	deleteBook({
																		variables: {
																			id: book.id
																		}
																	})
																}}
															/>)
													}
												</Mutation>

											</div>
											<div>
												<b>Name </b>: {book.name}
											</div>
											<div>
												<b>Price</b> : {book.price}
											</div>
											<div>
												<b>Author</b> : {book.author.name}
											</div>
										</div>
									)
								}
								{
									data.books.length == 0 && <p>No data to show</p>
								}
							</React.Fragment>
						)
					}
				}
			</Query>
		</div>
	)
}

export default ListBooks
