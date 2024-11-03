import React, { useState } from 'react';
import Menu from './Menu';
import SearchBar from './SearchBar';
import UserList from './UserList';

const Dashboard = () => {
    const [userStatus, setUserStatus] = useState('active'); // 'active' hoặc 'banned'
    const [searchQuery, setSearchQuery] = useState('');

    const handleMenuChange = (status) => {
        setUserStatus(status);
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
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
