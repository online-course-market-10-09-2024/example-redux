// SearchBar.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../stores/actions';
import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
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
