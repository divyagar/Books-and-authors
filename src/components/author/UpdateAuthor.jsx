import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import AuthorForm from './AuthorForm';
import { updateAuthor, getAuthors } from '../queries'

function UpdateAuthor(match) {
    const [name, setName] = useState(match.match.params.name);
    const [age, setAge] = useState(match.match.params.age);

    const handleSubmit = (e, updateAuthor) => {
        e.preventDefault()
        updateAuthor({
            variables: {
                id: match.match.params.id,
                name: name,
                age: age,
            }
        })
    }

    return (
        <div className="px-10 sm:w-1/2 lg:w-1/3 m-auto">
            <Mutation mutation={updateAuthor} refetchQueries={
                [{
                    query: getAuthors
                }]}>
                {
                    (updateAuthor, { loading, error, data }) => (
                        <AuthorForm
                            handleSubmit={(e) => handleSubmit(e, updateAuthor)}
                            name={name}
                            age={age}
                            setName={(e) => setName(e.target.value)}
                            setAge={(e) => setAge(e.target.value)}
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

export default UpdateAuthor
