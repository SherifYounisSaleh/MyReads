import { Routes, Route, BrowserRouter } from "react-router-dom";
import BookList from "./pages/BookList";
import Search from "./pages/Search";
import "./App.css";
import { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
    const data = await getAll().then(res=>res=res.books);
    setBooks(data);
  console.log(`App ${data}`)
  }
    fetchData()
  }, []);

  const handleChange = async (book, shelf) => {
    await update(book, shelf);
    book.shelf = shelf;
    const filterdBook = books.filter((b) => b.id !== book.id).concat(book);
    setBooks(filterdBook);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList books={books} setBooks={setBooks} handleChange={handleChange} />} />
        <Route path="/search" element={<Search handleChange={handleChange} books={books} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
