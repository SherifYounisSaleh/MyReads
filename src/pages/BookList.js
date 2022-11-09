import React from "react"
import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf"


const BookList = ({ books, setBooks, handleChange }) => {
 
  BookList.propTypes = {
    
    bookObject: books.array,
    handleChangeFunc: handleChange.func
  }
  const filter = function (books ,shelf) {
    
      return books.filter( (b)=> {
        return b.shelf === shelf;
      });
  };

  const wantToRead = filter(books,"wantToRead");
  const currentlyReading = filter(books,"currentlyReading");
  const read = filter(books,"read");

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf  handleChange={handleChange} filterArray={currentlyReading} shelfName="Currently Reading"/>
          <Bookshelf  handleChange={handleChange} filterArray={wantToRead} shelfName="Want To Read"/>
          <Bookshelf  handleChange={handleChange} filterArray={read} shelfName="Read"/>
        </div>
        <div className="open-search">
          <Link to="/search"> New book</Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BookList);
