import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {

	state = {
		query: '',
		books: [],
		noneFound: false
	}

	updateQuery = (query) => {
		// update the state query as source of truth
		this.setState({ query }); // query: query

		if (query) {
			this.setState({ noneFound: false })

			BooksAPI.search(query).then((results) => {
				// if the query has no matches throw the error
				if(results.error) throw results.error;

				// cycle through the results and create the new books array
				results.map((book, i) => {
				  	const bookID = this.props.books.findIndex((b) => b.id === book.id);

				  	// does the book already exist in our lists, if -1 set the shelf to none
				  	bookID >= 0 ? book.shelf = this.props.books[bookID].shelf : book.shelf = 'none';

				  	return book;
				});

				this.setState({ books: results });
			}).catch((err) => {
				console.log('Error:', err);

				// revert found book state
				this.setState({
				  books: [],
				  noneFound: true
				})
			})
	  	} else {
			this.setState({ books: [] })
	  	}
	}

	render() {
		return (
			<div className="search-books">
			  <div className="search-books-bar">
				<Link
					to="/"
					className="close-search"
					>Close</Link>

				<div className="search-books-input-wrapper">
				  <input
					type="text"
					placeholder="Search by title or author"
					value={this.state.query}
					onChange={(event) => this.updateQuery(event.target.value)}
				  />
				</div>
			  </div>

			  <div className="search-books-results">
				<ol className="books-grid">
					{this.state.noneFound ? (
						<h2>No books matched your query...</h2>
					) : (
						this.state.books.map((book, i) => (
							<Book
								key={i}
								book={book}
								changeShelf={this.props.changeShelf}
							/>
						))
					)}
				</ol>
			  </div>
			</div>
		);
	}
}

export default SearchPage;