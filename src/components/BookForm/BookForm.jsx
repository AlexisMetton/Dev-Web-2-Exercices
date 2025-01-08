import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";

const BookForm = ({updateBooKList}) => {

    const [error, setError] = useState({errorStatus: false, errorMessage: ""});

    const [formData, setFormData] = useState({
        name: '',
        numberOfPages: 0,
        author: '',
        isbn: ''
    })

    const handleChangeInput = (e) => {
        
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    const isValidISBN = (isbn) => {
        const isbnWithoutDashes = isbn.replaceAll('-', '');
        if(!isNaN(isbnWithoutDashes)) return true;
        return false
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const numberOfPagesInt = parseInt(formData.numberOfPages);

        if(formData.name.length === 0) {
            setError({
                errorStatus: true,
                errorMessage: "Name is required.",
            });
            return;
        }
        
        if(numberOfPagesInt <= 0) {
            setError({
                errorStatus: true,
                errorMessage: "Number of pages must be a positive number.",
            });
            return;
        }
        
        if(formData.author.length === 0) {
            setError({
                errorStatus: true,
                errorMessage: "Author is required.",
            });
            return;
        }

        const newEntry = {
            Authors: [formData.author],
            numberOfPages: numberOfPagesInt,
            name: formData.name,
            isbn: formData.isbn
        }

        updateBooKList(prev => ([
            ...prev,
            newEntry
        ]))
        
        setFormData({
            name: "",
            numberOfPages: "",
            author: "",
            isbn: ""
        });

        setError({
            errorStatus: false,
            errorMessage: ""
        })

        console.log('formdata', formData);
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Add a New Book</h2>
            {error.errorStatus && <p className="text-xs text-red-500">{error.errorMessage}</p>}
            <CustomInput type="text" name="name" value={formData.name} onChange={handleChangeInput} />
            <CustomInput type="number" name="numberOfPages" value={formData.numberOfPages} onChange={handleChangeInput} />
            <CustomInput type="text" name="author" value={formData.author} onChange={handleChangeInput} />
            <CustomInput type="text" name="isbn" value={formData.isbn} onChange={handleChangeInput} validate={isValidISBN} errorMessage="ISBN format is not valid"/>
            <button type="submit" className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Add new book</button>
        </form>
    )
}

export default BookForm;