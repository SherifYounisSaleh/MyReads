import React from "react";
import { Select, MenuItem } from '@mui/material';

const Book = ({ book, handleChange }) => {
 
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.cover === undefined ? `url(${book.imageLinks?.thumbnail})` : book.cover,//book.cover
          }}
        >
        </div>
        <div className="book-shelf-changer">

          <Select
            id="demo-simple-select"
            className="book-shelf-changerselect"
            onChange={(e) => handleChange(book, e.target.value)}
          >
            <MenuItem value="currentlyReading">Currently Reading</MenuItem>
            <MenuItem value="wantToRead">Want To Read</MenuItem>
            <MenuItem value="read">Read</MenuItem>
            <MenuItem value="none">none</MenuItem>
          </Select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
