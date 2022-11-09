import React from "react";
import Book from "../components/Book";


const bookshelf = ({  handleChange,filterArray ,shelfName}) => {
    bookshelf.propTypes = {
        filterArray: filterArray.array,
        handleChangeFunc: handleChange.func
  }
  return (
    
    <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
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