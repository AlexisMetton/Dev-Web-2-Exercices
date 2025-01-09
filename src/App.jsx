import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
// import Greet from './components/Greet/Greet';
// import Counter from './components/Counter/Counter';
//import Book from "./components/Book/Book";
// import books from './data/data.json';
import { useEffect, useState } from "react";
//import BookForm from "./components/BookForm/BookForm";
import BookDetails from "./components/BookDetails/BookDetails";
import Home from "./page/Home";
import BookForm from "./components/BookForm/BookForm";
// import { Suspense } from 'react';
//import { Loading } from './components/Book/Book';
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeProvider/ThemeProvider";

function App() {
  //console.log(books);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

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
        <div className={`App ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}>
          <Routes>
            <Route
              path="/"
              element={<Home bookList={bookList} filled={filled} />}
            />
            <Route
              path="/book/:isbn"
              element={<BookDetails books={bookList} />}
            />
            <Route
              path="/new"
              element={<BookForm updateBooKList={setBookList} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
