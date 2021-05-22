import React from 'react'
import { Query } from 'react-apollo'
import { Redirect } from 'react-router'

function AuthorForm(props) {
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
                    <label htmlFor="age" className="block text-left mt-4">
                        Age
					</label>
                    <input
                        type="number"
                        form="age"
                        value={props.age}
                        className="border-blue-600 rounded-2xl outline-none border-2 w-full px-3 py-2"
                        onChange={props.setAge}
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        value="Submit"
                        className="bg-blue-600 text-white cursor-pointer mt-8 mb-3 w-full py-3 text-lg rounded-2xl"
                    >
                        Submit
                    </button>
                </div>

                {props.loading && <p>Loading...</p>}
                {props.error && <p>Error while creating author</p>}
                {props.data && <Redirect to="/authors" />}

            </form>
        </div>
    )
}

export default AuthorForm