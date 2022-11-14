import React from "react";
import Book from "../components/Book";
import styles from "../Styles/Component.module.css";



const bookshelf = ({  handleChange,filterArray ,shelfName}) => {

  return (
    
    <div className={styles.bookshelf}>
    <h2 className={styles.bookshelfTitle}>{shelfName}</h2>
    <div className={styles.bookshelfBooks}>
      <ol className={styles.booksGrid}>
  
        {filterArray.length > 0 ? (
          filterArray.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                title={book.title}
                img={book.cover===undefined?book.imageLinks.thumbnail:book.cover}
                handleChange={handleChange}
                shelf={book.shelf}
              />
            </li>
          ))
        ) : (
          <h1>No Books</h1>
        )}
      </ol>
    </div>
  </div> 

  );
};

export default React.memo(bookshelf) ;