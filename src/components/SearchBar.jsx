import React from "react";

const SearchBar = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input 
            value={value}
            disabled={isLoading}
            onChange={onChange}
            placeholder="search Recipe"
            className='form-control'
            />
            
            <input 
            disables={isLoading || !value}
            type ="submit"
            className="btn"
            value="Search"
            />
            
        </form>
    )
}
export default SearchBar;