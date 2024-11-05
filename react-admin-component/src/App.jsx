import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import './App.css'

const App = () => {
  const [userStatus, setUserStatus] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuChange = (status) => {
    setUserStatus(status);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Dashboard 
        userStatus={userStatus}
        searchQuery={searchQuery}
        onMenuChange={handleMenuChange}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
};

export default App;