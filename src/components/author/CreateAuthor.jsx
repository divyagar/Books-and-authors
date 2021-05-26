import React, { useState } from 'react'
import { Mutation, Query } from 'react-apollo'
import { createAuthor, getAuthors } from '../queries'
import AuthorForm from './AuthorForm'

function CreateAuthor() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [errorLabels, setErrorLabels] = useState(null)

    const handleSubmit = (e, createAuthor) => {
        e.preventDefault()

        if (name == "" || age == 0) {
            setErrorLabels("Please fill all details")
            return
        }

        createAuthor({
            variables: {
                name: name,
                age: age,
            }
        })
    }

    return (
        <div className="w-full py-20">
            <div className="px-10 sm:w-1/2 lg:w-1/3 m-auto">
                <Mutation mutation={createAuthor} refetchQueries={
                    [{
                        query: getAuthors
                    }]}>
                    {
                        (createAuthor, { loading, error, data }) => (
                            <AuthorForm
                                handleSubmit={(e) => handleSubmit(e, createAuthor)}
                                name={name}
                                age={age}
                                errorLabels={errorLabels}
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
        </div>
    )
}

export default CreateAuthor
