import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookShelves extends Component {

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							title="Currently Reading"
							shelfBooks={this.props.books.filter((book) =>
								book.shelf === "currentlyReading"
							)}
							onChangeShelf={this.props.onChangeShelf}
						/>

						<BookShelf
							title="Want to Read"
							shelfBooks={this.props.books.filter((book) =>
								book.shelf === "wantToRead"
							)}
							onChangeShelf={this.props.onChangeShelf}
						/>

						<BookShelf
							title="Read"
							shelfBooks={this.props.books.filter((book) =>
								book.shelf === "read"
							)}
							onChangeShelf={this.props.onChangeShelf}
						/>
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