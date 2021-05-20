import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React from 'react'
import { BookComponent } from './BookComponent'

export default function AllTabs() {
	return (
		<div>
			<Tabs>
				<TabList className="w-full flex-1 py-5 px-2 text-lg bg-gray-100 mb-5">
					<Tab className="inline-block w-1/2 cursor-pointer">Books</Tab>
					<Tab className="inline-block w-1/2 cursor-pointer">Authors</Tab>
				</TabList>

				<TabPanel>
					<BookComponent />
				</TabPanel>
				<TabPanel>
					<h2>Authors</h2>
				</TabPanel>
			</Tabs>
		</div>
	)
}