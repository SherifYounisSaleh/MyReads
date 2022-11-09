import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { search } from '../BooksAPI';
import { Link } from 'react-router-dom';
import Book from '../components/Book'
import { createTheme } from '@mui/material/styles';

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



function Search({ handleChange, shelvedBooks}) {//, shelvedBooks 
    Search.propTypes = {
    
        handleChangeFunc: handleChange.func
      }
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
    const [searchBooks, setSearchBooks] = useState([])

    async function onChange(searchInput) {
        let validInput = searchTerms.map(term => term
            .toLowerCase()
            .startsWith(searchInput.toLowerCase())
        )
            .includes(true)

        if (searchInput === '') {
            validInput = false
        } 

        if (validInput) {
            const matchingBooks = await search(searchInput).then(res=>res=res.books)
            const searchResult = []

            console.log(`Search-matchingBooks ${matchingBooks}`)

            matchingBooks && await matchingBooks
                .forEach(book => {
                    if (book.id && book.title && book.authors && book.imageLinks) { 
                        searchResult.push({
                            bookId: book.id,
                            title: book.title,
                            authors: book.authors,
                            cover: `url(${book.imageLinks?.thumbnail})`,
                            shelf: shelvedBooks==undefined?' ' :shelvedBooks.filter(shelfBook => shelfBook.bookId === book.id).map(shelvedBook => shelvedBook.shelf)
                        })
                    }
                })

            setSearchBooks(searchResult)
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">

                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>

                    <Autocomplete
                        Search
                        id="free-Search-2-demo"
                        options={searchTerms}
                        renderInput={(params) => (
                            <TextField
                                style={theme}
                                {...params}
                                variant="standard"
                                // onClick={(e) => onChange(e.target.value)}
                                // onChange={(e) => onChange(e.target.value)}
                                onSelect={(e) => onChange(e.target.value)}
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
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchBooks.map(book => {
                        let shelfName=book.shelf[0]
                        return (
                            <li key={book.bookId}>
                                { shelfName!== '' ? <p className='search-result-shelf'>{book.shelf}</p> : ''}
               
                                <Book book={book} handleChange={(book ,e) => handleChange(book,e)}
                                />
                            </li>
                        )
                    }
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Search
