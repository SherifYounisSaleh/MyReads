import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';//Autocomplete
import Autocomplete from '@mui/material/Autocomplete'
import { search } from '../BooksAPI';
import { Link } from 'react-router-dom';
import Book from '../components/Book'
import { createTheme } from '@mui/material/styles';
import styles from "../Styles/Component.module.css";
import useDelay from "../CustomHook/useDelay";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});



function Search({ handleChange, books }) {//, shelvedBooks 

  const searchTerms = [
    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
    'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
    'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling',
    'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
    'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
    'Games', 'Gandhi',
    'Homer', 'Horror', 'Hugo',
    'Ibsen',
    'Journey',
    'Kafka', 'King',
    'Lahiri', 'Larsson', 'Learn', 'Literary Fiction',
    'Make', 'Manage', 'Marquez', 'Money', 'Mystery',
    'Negotiate',
    'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming',
    'React', 'Redux', 'River', 'Robotics', 'Rowling',
    'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
    'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
    'Ultimate',
    'Virtual Reality',
    'Web Development',
    'iOS']

  const [searchQuery, setSearchQuery] = useState("");
  const delayValue = useDelay(searchQuery, 100);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      search(delayValue, 5).then((res) => {
        console.log(`debouncedValue1 ${typeof(res)}`)
        if (!res.error ) {
          res = res?.books;
          res = res?.map((searhedBook) => {
            const bookOnShelf = books.find((b) => b.id === searhedBook.id);
            if (bookOnShelf) {
              searhedBook.shelf = bookOnShelf.shelf;
            } else {
              searhedBook.shelf = "none"
            }
            return searhedBook;
          });
          setSearchResults(res);
        } else {
          setSearchResults([]);
        }
      });
    } else {
      setSearchResults([]);
    }
  }, [books, delayValue]);

  return (
    <div className={styles.searchBooks}>
      <div className={styles.searchBooksBar}>
        <Link to='/'><button className={styles.closeSearch}>Close</button></Link>
        <div className={styles.searchBooksInputWrapper}>

          <div className={styles.listBooksTitle}>
            <h1>MyReads</h1>
          </div>
          <Autocomplete
                        id="free-Search-2-demo"
                        options={searchTerms}
                        renderInput={(params) => (
                            <TextField
                                theme={theme}
                                {...params}
                                variant="standard"
                                onSelect={(e) => {
                                  setSearchQuery(e.target.value);
                                }}
                                onAbort={(e) => {
                                  setSearchQuery(e.target.value);
                                }}
                                label="Search by title or author"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />

        </div>
      </div>
      <div className={styles.searchBooksResults}>

        <ol className={styles.booksGrid}>
          {searchResults.map(book => {

            let shelfName = book.shelf

            return (

              <li key={book.id} >
                {shelfName !== '' ? <p className={styles.searchResultShelf}>{book.shelf}</p> : ''}

                <Book book={book} key={book.id} handleChange={(book, e) => handleChange(book, e)}
                />
              </li>
            )
          }
          )}
          { searchResults.length >0 && (
            <h1>Could not find any books</h1>
          )}
        </ol>
      </div>
    </div>
  )
}

export default Search
