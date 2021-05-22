import React, { useState } from 'react'
import { Query, Mutation } from 'react-apollo'
import { getBooks, deleteBook } from './queries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import UpdateBookComponent from './UpdateBookComponent'

function ListBooks() {
	const [show, setShow] = useState(false)

	return (
		<div className="py-20">
			<Query query={getBooks}>
				{
					({ loading, error, data }) => {
						console.log(data)
						if (loading) return <p>Loading...</p>
						if (error) return <p>Error while fetching data</p>
						return (
							<React.Fragment>
								{
									data.books.length > 0 &&
									data.books.map(book =>
										<div className="">
											<div key={book.id} className="m-auto w-1/4 border-t-2 border-b-2 px-10 py-5 text-left">
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

													<FontAwesomeIcon
														icon={faEdit}
														className="cursor-pointer ml-2"
														color="blue"
														onClick={() => setShow(true)}
													/>

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

											{/* <div className={show ? "" : "hidden"}>
												{alert("state: ", book.name, book.price)}
												<UpdateBookComponent
													name={book.name}
													price={book.price}
													author={book.author.id}
													id={book.id}
												/>
											</div> */}
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
