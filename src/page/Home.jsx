import Book from "../components/Book/Book";
import { NavLink } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";

const Home = ({ bookList, filled }) => {
  return (
    <div className="container mx-auto p-6">
      <header>
        <h1 className="text-3xl font-bold mb-6 text-center">Book Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filled ? (
            bookList.map((bookItem) => (
              <NavLink
                to={`/book/${bookItem.isbn}`}
                key={`book_${bookItem.isbn}`}
                className="hover:no-underline"
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{bookItem.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Book
                      isbn={bookItem.isbn}
                      name={bookItem.name}
                      numberOfPages={bookItem.numberOfPages}
                      authors={bookItem.authors}
                    />
                  </CardContent>
                </Card>
              </NavLink>
            ))
          ) : (
            // Skeleton loaders for loading state
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="p-4">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-1/2" />
              </Card>
            ))
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
