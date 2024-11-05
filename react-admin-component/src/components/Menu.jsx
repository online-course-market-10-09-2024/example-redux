import React, { useState } from 'react';
import './Menu.css'; // Import file CSS

const Menu = ({ userState, onMenuChange }) => {
    const handleButtonClick = (status) => {
        onMenuChange(status);
    };

    return (
        <div className='button-container'>
            <button
                className={`menu-button ${userState === 'active' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('active')}
            >
                Người dùng đang hoạt động
            </button>
            <button
                className={`menu-button ${userState === 'banned' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('banned')}
            >
                Người dùng bị cấm
            </button>
        </div>
    );
};

export default Menu;
