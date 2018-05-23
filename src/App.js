import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import BookShelves from './BookShelves';
import './App.css'

class BooksApp extends Component {
  state = {
	books: []
  }

  componentDidMount() {
	BooksAPI.getAll()
		.then((books) =>
			this.setState({ books }) // books: books equivalent
	  	);
	}

  changeShelf = (book, shelf) => {
	// check to see if the book exists in the current books array
	const bookID = this.state.books.findIndex((b) => b.id === book.id);

	// If it's new (-1), add it to the shelf, otherwise adjust the books shelf
	if (bookID < 0) {
	  book.shelf = shelf;
	  this.setState((state) => state.books.push(book));
	} else {
	  this.setState((state) => state.books[bookID].shelf = shelf);
	}

	// remove unwanted books by returning an array of books that have a shelf set
	this.setState((state) => (state.books.filter((book) => book.shelf !== 'none')));

	// update the book in the database
	BooksAPI.update({id: book.id}, shelf);
  }

  render() {
	return (
	  <div className="app">
		<Route exact path="/search" render={() => (
		  <SearchPage
			books={this.state.books}
			changeShelf = {this.changeShelf}
		  />
		)} />

		<Route exact path="/" render={() => (
		  <BookShelves
			books = {this.state.books}
			changeShelf = {this.changeShelf}
		  />
		)} />
	  </div>
	)
  }
}

export default BooksApp;
