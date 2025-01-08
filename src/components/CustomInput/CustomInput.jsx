import { useState } from "react"

const CustomInput = ({ type, name, value, onChange, validate, errorMessage }) => {

    const [error, setError] = useState({errorStatus: false, errorMessage: ""});

    const handleChange = (e) => {
        const { value } = e.target;

        if(validate && !validate(value)) {
            setError({errorStatus: true, errorMessage})
        } else {
            setError({ errorStatus: false, errorMessage: "" });
            onChange(e);
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-sm font-medium text-gray-700">{name}</label>
            <input type={type} name={name} onChange={handleChange} value={value} className={`border rounded-md px-3 py-2 text-sm ${
                    error.errorMessage ? "border-red-500" : "border-gray-300"
                }`}/>
            {error.errorStatus && <p className="text-xs text-red-500">{error.errorMessage}</p>}
        </div>
    )

}

export default CustomInput