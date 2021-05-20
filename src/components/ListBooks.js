import React from 'react'
import { Query } from 'react-apollo'
import { getBooks } from './queries'

const Data = () => (
	<Query query={getBooks}>
		{
			({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>
				if (error) return <p>Error while fetching data</p>
				return (
					<React.Fragment>
						{
							data.books.map(book => <div key={book.id}>{book.name}</div>)
						}
					</React.Fragment>
				)
			}
		}
	</Query>
)

function ListBooks() {
	return (
		<div>
			<Data />
		</div>
	)
}

export default ListBooks
