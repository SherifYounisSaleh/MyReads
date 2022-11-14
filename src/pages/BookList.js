import React from "react"
import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";
import styles from "../Styles/Component.module.css";


const BookList = ({ books, setBooks, handleChange }) => {

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
      <div className={styles.listBooks}>
        <div className={styles.listBooksTitle}>
          <h1>MyReads</h1>
        </div>
        <div className={styles.ListBooksContent}>
          <Bookshelf  handleChange={handleChange} filterArray={currentlyReading} shelfName="Currently Reading"/>
          <Bookshelf  handleChange={handleChange} filterArray={wantToRead} shelfName="Want To Read"/>
          <Bookshelf  handleChange={handleChange} filterArray={read} shelfName="Read"/>
        </div>
        <div className={styles.openSearch}>
          <Link to="/search"> New book</Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BookList);
