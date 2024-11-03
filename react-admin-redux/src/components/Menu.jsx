// Menu.jsx
import React, { useState } from 'react';
import './Menu.css';

const Menu = ({ onMenuChange }) => {
    const [selectedStatus, setSelectedStatus] = useState('active');

    const handleButtonClick = (status) => {
        setSelectedStatus(status);
        onMenuChange(status);
    };

    return (
        <div className='button-container'>
            <button
                className={`menu-button ${selectedStatus === 'active' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('active')}
            >
                Người dùng đang hoạt động
            </button>
            <button
                className={`menu-button ${selectedStatus === 'banned' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('banned')}
            >
                Người dùng bị cấm
            </button>
        </div>
    );
};

export default Menu;
