import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage';
import BookList from './BookList';

class BooksApp extends Component {
  state = {
	books: []
  }

  componentDidMount() {
	console.log('didMount', this)
	BooksAPI.getAll()
	  .then((books) => {
		this.setState({ books });
	  });
  }

  render() {
	return (
	  <div className="app">
		<Route exact path="/search" render={() => (
		  <SearchPage

		  />
		)} />

		<Route exact path="/" render={() => (
		  <BookList
		  	books = {this.state.books}
		  />
		)} />
	  </div> //.app
	)
  }
}

export default BooksApp;
