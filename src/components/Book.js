import React from "react";
import { Select, MenuItem } from '@mui/material';
import styles from "../Styles/Component.module.css";

const Book = ({ book, handleChange }) => {
 
  const shelves = [{ id: "1", shelfName: "currentlyReading", shelfDisplayName: "Currently Reading" },
  { id: "2", shelfName: "wantToRead", shelfDisplayName: "Want To Read" },
  { id: "3", shelfName: "read", shelfDisplayName: "Read" },
  { id: "4", shelfName: "none", shelfDisplayName: "none" },
  { id: "5", shelfName: ' ', shelfDisplayName: ' ' }]
  return (
    <div className={styles.book}>
      <div className={styles.bookTop}>
        <div
          className={styles.bookCover}
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.cover === undefined ? `url(${book.imageLinks?.thumbnail})` : book.cover,//book.cover
          }}
        >
        </div>
        <div className={styles.bookShelfChanger}>

          <Select
            id="demo-simple-select"
            value={book.shelf}
            
            className={styles.bookShelfChangerselect}
            onChange={(e) => handleChange(book, e.target.value)}
          >
            {shelves.map((e) => <MenuItem  key={e.shelfName}  value={e.shelfName}>{e.shelfDisplayName}</MenuItem>)}

          </Select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
