import { Tab, Tabs, TabList } from 'react-tabs'
import React from 'react'
import { BookComponent } from './book/BookComponent'
import { Link, Switch, Route } from 'react-router-dom'
import { AuthorComponent } from './author/AuthorComponent'
import CreateBook from './book/CreateBook'
import ListBooks from './book/ListBooks'
import UpdateBook from './book/updateBook'
import CreateAuthor from './author/CreateAuthor'
import UpdateAuthor from './author/UpdateAuthor'
import ListAuthors from './author/ListAuthors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function AllTabs() {
	return (
		<div>
			<Tabs>
				<TabList className="w-full flex-1 py-5 px-2 text-lg bg-gray-100 mb-5">
					<Link to="/booksManager">
						<Tab className="inline-block w-1/2 cursor-pointer">Books</Tab>
					</Link>
					<Link to="/authorsManager">
						<Tab className="inline-block w-1/2 cursor-pointer">Authors</Tab>
					</Link>
				</TabList>
				<div className="px-10 text-left">
					<
						FontAwesomeIcon
						icon={faArrowLeft}
						className="cursor-pointer"
						onClick={() => window.history.go(-1)}
						size="lg"
					/>
				</div>

				<Switch>
					<Route exact path="/" component={BookComponent} />
					<Route exact path="/booksManager" component={BookComponent} />
					<Route path="/authorsManager" component={AuthorComponent} />
					<Route path="/createBook" component={CreateBook} />
					<Route path="/updateBook/:id/:name/:price/:author" component={UpdateBook} />
					<Route path="/books" component={ListBooks} />
					<Route path="/createAuthor" component={CreateAuthor} />
					<Route path="/updateauthor/:id/:name/:age" component={UpdateAuthor} />
					<Route path="/authors" component={ListAuthors} />
				</Switch>
			</Tabs>
		</div>
	)
}