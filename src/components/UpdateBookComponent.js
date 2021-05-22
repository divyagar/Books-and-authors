import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { updateBook, getBooks } from './queries'
import CreateBookComponent from './CreateBookComponent'

function UpdateBookComponent(props) {
    // alert("props: ", props)
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);
    const [author, setAuthor] = useState(props.author);

    const handleSubmit = (e, updateBook) => {
        alert("updating book")
        alert(props.id, name, price, author)
        e.preventDefault()
        updateBook({
            variables: {
                id: props.id,
                name: name,
                price: price,
                author: author
            }
        })
    }

    // alert("props", name, price, author, props)

    return (
        <div className="px-10 sm:w-1/2 lg:w-1/3 m-auto">
            <Mutation mutation={updateBook} refetchQueries={() => {
                return [{
                    updateBook: getBooks
                }]
            }}>
                {
                    (updateBook, { loading, error, data }) => (
                        <CreateBookComponent
                            handleSubmit={(e) => handleSubmit(e, updateBook)}
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
    )
}

export default UpdateBookComponent
