import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import BookForm from './BookForm';
import { updateBook, getBooks } from '../queries'

function UpdateBook(match) {
    const [name, setName] = useState(match.match.params.name);
    const [price, setPrice] = useState(match.match.params.price);
    const [author, setAuthor] = useState(match.match.params.author);
    const [errorLabels, setErrorLabels] = useState(null)

    const handleSubmit = (e, updateBook) => {
        e.preventDefault()

        if (name == "" || price == 0 || author == null) {
            setErrorLabels("Please fill all details")
            return
        }

        updateBook({
            variables: {
                id: match.match.params.id,
                name: name,
                price: price,
                author: author
            }
        })
    }

    return (
        <div className="px-10 sm:w-1/2 lg:w-1/3 m-auto">
            <Mutation mutation={updateBook} refetchQueries={
                [{
                    query: getBooks
                }]}>
                {
                    (updateBook, { loading, error, data }) => (
                        <BookForm
                            handleSubmit={(e) => handleSubmit(e, updateBook)}
                            name={name}
                            price={price}
                            author={author}
                            errorLabels={errorLabels}
                            creating={false}
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
    )
}

export default UpdateBook
