//import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

const BookForm = ({updateBooKList}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    
    const isValidISBN = (isbn) => {
        const isbnWithoutDashes = isbn.replaceAll('-', '');
        if(!isNaN(isbnWithoutDashes)) return true;
        return false
    }

    const onSubmit = (data) => {

        const numberOfPagesInt = parseInt(data.numberOfPages);

        const newEntry = {
            Authors: [data.author],
            numberOfPages: numberOfPagesInt,
            name: data.name,
            isbn: data.isbn
        }

        updateBooKList(prev => ([
            ...prev,
            newEntry
        ]))

        reset();

        //console.log('formdata', data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Add a New Book</h2>
            <CustomInput type="text" name="name" errorMessage={errors.name?.message}
                {...register("name", { required: "Name is required." })} />
            <CustomInput type="number" name="numberOfPages" errorMessage={errors.numberOfPages?.message}
                {...register("numberOfPages", {
                    required: "Number of pages is required.",
                    validate: (value) =>
                        value > 0 || "Number of pages must be greater than 0.",
                })} />
            <CustomInput type="text" name="author" errorMessage={errors.author?.message} {...register("author", { required: "Author is required." })} />
            <CustomInput type="text" name="isbn" errorMessage={errors.isbn?.message}
                {...register("isbn", {
                    required: "ISBN is required.",
                    validate: (value) =>
                        isValidISBN(value) || "ISBN format is not valid.",
                })}/>
            <Button type="submit" className="w-full">
                Add New Book
            </Button>
        </form>
    )
}

export default BookForm;