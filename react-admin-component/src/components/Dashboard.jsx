import React from 'react';
import Menu from './Menu';
import SearchBar from './SearchBar';
import UserList from './UserList';

const Dashboard = ({ userStatus, searchQuery, onMenuChange, onSearchChange }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Menu userStatus={userStatus} onMenuChange={onMenuChange} />
      <SearchBar onSearchChange={onSearchChange} />
      <UserList userStatus={userStatus} searchQuery={searchQuery} />
    </div>
  );
};

export default Dashboard;