
const Book = (props) => {
    return (
        <>
            {/* <div style={{display: "block"}}>
                <h2>{props.name}</h2> */}
                <img src={`https://covers.openlibrary.org/b/isbn/${props.isbn}-L.jpg`} alt="" />
            {/* </div> */}
        </>
    )
}

export default Book;



// import React from "react";

// export const Loading = () => {
//   return <h2>🌀 Loading...</h2>;
// };

// const Book = React.lazy(() => {
//   const bookListAPIaddress = "https://anapioficeandfire.com/api/books";

//   const fetchBooks = async () => {
//     const res = await fetch(bookListAPIaddress);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await res.json();
//     return { default: () => <BookList books={data} /> };
//   };
//   return fetchBooks();
// });

// const BookList = ({ books }) => {
//   return (
//     <>
//       {books.map((bookItem) => (
//         <div style={{ display: "block" }} key={bookItem.isbn}>
//           <h2>{bookItem.name}</h2>
//           <img
//             src={`https://covers.openlibrary.org/b/isbn/${bookItem.isbn}-L.jpg`}
//             alt={bookItem.name}
//             style={{ maxWidth: "150px", maxHeight: "200px" }}
//           />
//         </div>
//       ))}
//     </>
//   );
// };

// export default Book;
