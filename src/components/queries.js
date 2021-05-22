import { gql } from 'graphql-tag'

const getBooks = gql`
{
    books{
        id
        name
        price
        author{
            id
            name
        }
    }
}
`

const createBook = gql`
    mutation($name: String!, $price: Int!, $author: Int!){
        createBook(name: $name, price: $price, author: $author){
            book{
                name
            }
        }
    }
`

const getAuthors = gql`
{
    authors{
        id
        name
    }
}
`

const deleteBook = gql`
mutation($id: Int!){
    deleteBook(id: $id){
        ok
    }
}
`

const updateBook = gql`
mutation($id: Int!, $name: String!, $price: Int!, $author: Int!){
    updateBook(id: $id, name: $name, price: $price, author: $author){
        book{
            name
        }
    }
}
`

export { getBooks, createBook, getAuthors, deleteBook, updateBook }