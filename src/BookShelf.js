import React  from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'

const BookShelf = (props) => (
	<div className="bookshelf">
		<h2 className="bookshelf-title">{props.title}</h2>
		<div className="bookshelf-books">
			<ol className="books-grid">
			{
				props.shelfBooks.map((book, i) => (
					<Book
						key={i}
						book={book}
						changeShelf={props.changeShelf}
					/>
				))
			}
			</ol>
		</div>
	</div>
)

export default BookShelf;