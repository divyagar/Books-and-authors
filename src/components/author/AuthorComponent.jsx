import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const AuthorComponent = () => {
    return (
        <div>
            <div className="px-10 text-left">
                <
                    FontAwesomeIcon
                    icon={faArrowLeft}
                    className="cursor-pointer"
                    size="lg"
                />
            </div>
            <div className="flex flex-col py-20 justify-center items-center" >
                <div>
                    <button
                        className="border border-black px-14 py-3 mb-5 focus:outline-none"
                    >
                        <Link to="/createAuthor">
                            Create an author
						</Link>
                    </button>
                </div>

                <div>
                    <button
                        className="border border-black px-14 py-3 mb-5 focus:outline-none"
                    >
                        <Link to="/authors">
                            List all authors
						</Link>
                    </button>
                </div>

            </div>
        </div>
    )
}
