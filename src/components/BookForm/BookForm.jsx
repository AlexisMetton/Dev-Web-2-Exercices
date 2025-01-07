const handleSubmit = (event) => {
    console.log(event);
}

const BookForm = () => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="book-title" />
            <button type="submit">Valider</button>
        </form>
    )
}

export default BookForm;