import { gql } from 'graphql-tag'

const getBooks = gql`
{
    books{
        id
        name
        price
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

export { getBooks, createBook, getAuthors }