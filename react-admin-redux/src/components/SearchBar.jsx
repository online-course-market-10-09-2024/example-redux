// SearchBar.jsx
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchChange }) => {
    const handleInputChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
        <div>
            <input
                className='search-input'
                type="text"
                placeholder="Tìm kiếm người dùng..."
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
