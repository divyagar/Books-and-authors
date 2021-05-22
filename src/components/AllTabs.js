import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React from 'react'
import { BookComponent } from './BookComponent'
import { Link, Switch, Route } from 'react-router-dom'
import AuthorComponent from './author/AuthorComponent'
import CreateBook from './CreateBook'
import ListBooks from './ListBooks'

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

				<Switch>
					<Route exact path="/" component={BookComponent} />
					<Route exact path="/booksManager" component={BookComponent} />
					<Route path="/authorsManager" component={AuthorComponent} />
					<Route path="/createBook" component={CreateBook} />
					<Route path="/updateBook" component={CreateBook} />
					<Route path="/books" component={ListBooks} />
				</Switch>
			</Tabs>
		</div>
	)
}