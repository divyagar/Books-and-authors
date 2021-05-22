import React from 'react'
import { Query } from 'react-apollo'
import { Redirect } from 'react-router'
import { getAuthors } from '../queries'

function BookForm(props) {
    const Authors = () => (
        <Query query={getAuthors}>
            {
                ({ loading, error, data }) => {
                    if (loading) return null
                    if (error) return null
                    return (
                        <React.Fragment>
                            <option value="null">Select author</option>
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
        <div>
            < form className="border-2 border-gray-600 px-10 py-5" onSubmit={props.handleSubmit}>

                <div>
                    <label htmlFor="name" className="block text-left">
                        Name
              		</label>
                    <input
                        type="text"
                        id="name"
                        value={props.name}
                        className="border-blue-600 rounded-2xl outline-none border-2 w-full px-3 py-2"
                        onChange={props.setName}
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-left mt-4">
                        Price
					</label>
                    <input
                        type="number"
                        form="price"
                        value={props.price}
                        className="border-blue-600 rounded-2xl outline-none border-2 w-full px-3 py-2"
                        onChange={props.setPrice}
                    />
                </div>

                <div>
                    <label htmlFor="author" className="block text-left mt-4">
                        Author
       				</label>
                    <select
                        htmlFor="author"
                        className="cursor-pointer border-blue-600 rounded-2xl outline-none border-2 w-full px-3 py-2"
                        onChange={props.setAuthor}
                        value={props.author}
                    >
                        <Authors />
                    </select>
                </div>

                <div>
                    <button
                        type="submit"
                        value="Submit"
                        className="bg-blue-600 text-white cursor-pointer mt-8 mb-3 w-full py-3 text-lg rounded-2xl"
                    >
                        Create
                    </button>
                </div>

                {props.loading && <p>Loading...</p>}
                {props.error && <p>Error while creating book</p>}
                {props.data && <Redirect to="/books" />}

            </form>
        </div>
    )
}

export default BookForm