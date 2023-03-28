import React from "react";

export const InputGeneral = ({ type, description, name, handleChange, value }) => {
    return (
        <div className="flex flex-row justify-between my-2">
            <label className="ml-2 w-1/4 text-start">{description}</label>
            <input
                onChange={handleChange}
                name={name}
                className="w-3/4 border-white border-b-slate-300 border-2 focus:outline-none focus:border-b-blue-400 px-3 py-1 mx-2 placeholder:normal-case"
                type={type}
                placeholder={description}
                value={value}
            />
        </div>
    );
};

//export { InputGeneral };