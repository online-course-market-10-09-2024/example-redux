// Dashboard.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserStatus, setSearchQuery } from '../actions';
import Menu from './Menu';
import SearchBar from './SearchBar';
import UserList from './UserList';

const Dashboard = () => {
    const userStatus = useSelector((state) => state.userStatus);
    const searchQuery = useSelector((state) => state.searchQuery);
    const dispatch = useDispatch();

    const handleMenuChange = (status) => {
        dispatch(setUserStatus(status));
    };

    const handleSearchChange = (query) => {
        dispatch(setSearchQuery(query));
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Menu onMenuChange={handleMenuChange} />
            <SearchBar onSearchChange={handleSearchChange} />
            <UserList userStatus={userStatus} searchQuery={searchQuery} />
        </div>
    );
};

export default Dashboard;
