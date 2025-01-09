import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/ui/card";
// import { Button } from "@/ui/button";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

const BookDetails = ({ books }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const { isbn } = useParams();
  const book = books.find((book) => book.isbn === isbn);

  if (!book) {
    return (
      <div className={`flex flex-col items-center justify-center h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}>
        <h1 className="text-2xl font-semibold">Book Not Found</h1>
        <NavLink to="/">
          <Button variant="outline" className="mt-4">
            Back to Home
          </Button>
        </NavLink>
      </div>
    );
  }

  const { name, numberOfPages, authors } = book;

  return (
    <div className={`container mx-auto p-6 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}>
      <ThemeSwitcher/>
      <Card className={`max-w-md mx-auto shadow-lg ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
        <CardHeader>
          <CardTitle className="text-center">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <img
            src={`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`}
            alt={name || "Book cover"}
            className="rounded-lg mb-4"
          />
          <div className="text-sm text-muted-foreground">
            <p>
              <strong>ISBN:</strong> {isbn}
            </p>
            <p>
              <strong>Pages:</strong> {numberOfPages}
            </p>
            <p>
              <strong>Author:</strong> {authors?.[0] || "Unknown"}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <NavLink to="/">
            <Button variant="default">Back</Button>
          </NavLink>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookDetails;
