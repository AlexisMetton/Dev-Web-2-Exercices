import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Greet from './components/Greet/Greet';
// import Counter from './components/Counter/Counter';
//import Book from "./components/Book/Book";
// import books from './data/data.json';
import { useEffect, useState } from "react";
//import BookForm from "./components/BookForm/BookForm";
import BookDetails from "./components/BookDetails/BookDetails";
import Home from "./page/Home";
// import { Suspense } from 'react';
//import { Loading } from './components/Book/Book';

function App() {
  //console.log(books);
  const bookListAPIaddress = "https://anapioficeandfire.com/api/books";

  const [bookList, setBookList] = useState([]);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    fetch(bookListAPIaddress)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBookList(data);
        setFilled(true);
        console.log(data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home bookList={bookList} filled={filled}/>}
          />
          <Route path="/book/:isbn" element={<BookDetails books={bookList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
