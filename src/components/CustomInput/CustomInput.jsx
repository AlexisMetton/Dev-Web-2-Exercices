
const CustomInput = ({ type, name, errorMessage, ...rest }) => {

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-sm font-medium text-gray-700">{name}</label>
            <input type={type} name={name} className={`border rounded-md px-3 py-2 text-sm ${
                    errorMessage ? "border-red-500" : "border-gray-300"
                }`} {...rest}/>
            {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
        </div>
    )

}

export default CustomInput