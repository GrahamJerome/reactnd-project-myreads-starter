import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

class BookShelves extends Component {

	state = {
		shelves: [{
	      title: 'Currently Reading',
	      tag: 'currentlyReading'
	    }, {
	      title: 'Want to read',
	      tag: 'wantToRead'
	    }, {
	      title: 'Read',
	      tag: 'read'
	    }]
	}

	render() {
		const { shelves } = this.state;

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{shelves.map((shelf, i) => (
							<BookShelf
								key={i}
								title={shelf.title}
								shelfBooks={this.props.books.filter((book) =>
									book.shelf === shelf.tag
								)}
								changeShelf={this.props.changeShelf}
							/>
						))}
					</div>
				</div>

				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default BookShelves;