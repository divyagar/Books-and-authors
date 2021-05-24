import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { getAuthors, deleteAuthor } from '../queries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ListAuthors() {
    return (
        <div className="py-20">
            <Query query={getAuthors}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error while fetching data</p>

                        return (
                            <React.Fragment>
                                {
                                    data.authors.length > 0 &&
                                    data.authors.map(author =>
                                        <div className="">
                                            <div key={author.id} className="m-auto sm:w-1/4 w-3/4 border-t-2 border-b-2 px-10 py-5 text-left">
                                                <div>
                                                    <Mutation mutation={deleteAuthor} refetchQueries={() => {
                                                        return [{
                                                            query: getAuthors
                                                        }]
                                                    }}>
                                                        {
                                                            (deleteAuthor, { loading, error, data }) => (
                                                                <FontAwesomeIcon
                                                                    icon={faTrashAlt}
                                                                    className="cursor-pointer"
                                                                    color="red"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        deleteAuthor({
                                                                            variables: {
                                                                                id: author.id
                                                                            }
                                                                        })
                                                                    }}
                                                                />)
                                                        }
                                                    </Mutation>

                                                    <Link to={`updateAuthor/${author.id}/${author.name}/${author.age}`}>
                                                        <FontAwesomeIcon
                                                            icon={faEdit}
                                                            className="cursor-pointer ml-2"
                                                            color="blue"
                                                        />
                                                    </Link>

                                                </div>
                                                <div>
                                                    <b>Name </b>: {author.name}
                                                </div>
                                                <div>
                                                    <b>Age</b> : {author.age}
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                                {
                                    data.authors.length == 0 && <p>No data to show</p>
                                }
                            </React.Fragment>
                        )
                    }
                }
            </Query>
        </div>
    )
}

export default ListAuthors
