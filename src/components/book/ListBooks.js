import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { getBooks, deleteBook } from '../queries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ListBooks() {
	return (
		<div className="py-20">
			<Query query={getBooks}>
				{
					({ loading, error, data }) => {

						if (loading) return <p>Loading...</p>
						if (error) return <p>Error while fetching data</p>

						return (
							<React.Fragment>
								{
									data.books.length > 0 &&
									data.books.map(book =>
										<div className="">
											<div key={book.id} className="m-auto sm:w-1/4 w-3/4 border-t-2 border-b-2 px-10 py-5 text-left">
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

													<Link to={`updateBook/${book.id}/${book.name}/${book.price}/${book.author.id}`}>
														<FontAwesomeIcon
															icon={faEdit}
															className="cursor-pointer ml-2"
															color="blue"
														/>
													</Link>

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
