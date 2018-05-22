import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookShelf extends Component {

	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
					{
						this.props.shelfBooks.map((book, i) => (
							<Book
								key={i}
								book={book}
								onChangeShelf={this.props.onChangeShelf}
							/>
						))
					}
					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf;