// Dashboard.jsx
import React from 'react';
import Menu from './Menu';
import SearchBar from './SearchBar';
import UserList from './UserList';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Menu />
      <SearchBar />
      <UserList />
    </div>
  );
};

export default Dashboard;
